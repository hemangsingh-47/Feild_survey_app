import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function CameraScreen() {
  const cameraRef = useRef(null);

  const [permission, requestPermission] = useCameraPermissions();

  const [photo, setPhoto] = useState(null);
  const [captureTime, setCaptureTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Loading while checking permission
  if (!permission) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  // Camera permission
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.permissionText}>
          Camera Permission Required
        </Text>

        <Pressable
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>
            Grant Permission
          </Text>
        </Pressable>
      </View>
    );
  }

  // Capture Photo
  const takePhoto = async () => {
    if (!cameraRef.current) return;

    try {
      setLoading(true);

      const result = await cameraRef.current.takePictureAsync({
        quality: 0.8,
      });

      setPhoto(result.uri);
      setCaptureTime(new Date().toLocaleString());
    } catch (error) {
      Alert.alert("Error", "Failed to capture photo.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Photo
  const deletePhoto = () => {
    Alert.alert(
      "Delete Photo",
      "Are you sure you want to delete this photo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setPhoto(null);
            setCaptureTime("");
          },
        },
      ]
    );
  };

  // Preview Screen
  if (photo) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: photo }}
          style={styles.preview}
        />

        <View style={styles.info}>
          <Text style={styles.label}>Capture Time</Text>
          <Text>{captureTime}</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => setPhoto(null)}
        >
          <Text style={styles.buttonText}>
            Retake Photo
          </Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.deleteButton]}
          onPress={deletePhoto}
        >
          <Text style={styles.buttonText}>
            Delete Photo
          </Text>
        </Pressable>
      </View>
    );
  }

  // Camera Screen
  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={{ marginVertical: 20 }}
        />
      ) : (
        <Pressable
          style={styles.button}
          onPress={takePhoto}
        >
          <Text style={styles.buttonText}>
            Capture Photo
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
  },

  camera: {
    flex: 1,
  },

  preview: {
    flex: 1,
    resizeMode: "cover",
  },

  info: {
    alignItems: "center",
    marginVertical: 15,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  deleteButton: {
    backgroundColor: "#EF4444",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});