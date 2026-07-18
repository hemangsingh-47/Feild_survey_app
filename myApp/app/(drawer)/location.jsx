import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";

import * as Location from "expo-location";
import * as Clipboard from "expo-clipboard";

export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    try {
      setLoading(true);

      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required."
        );
        setLoading(false);
        return;
      }

      const currentLocation =
        await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

      setLocation(currentLocation.coords);
    } catch (error) {
      Alert.alert("Error", "Unable to fetch location.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const copyLocation = async () => {
    if (!location) {
      Alert.alert("No Location", "Fetch location first.");
      return;
    }

    const text = `Latitude: ${location.latitude}
Longitude: ${location.longitude}`;

    await Clipboard.setStringAsync(text);

    Alert.alert("Copied", "Location copied successfully.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#2563EB" />
      ) : location ? (
        <View style={styles.card}>
          <Text style={styles.text}>
            Latitude:
          </Text>
          <Text>{location.latitude}</Text>

          <Text style={styles.text}>
            Longitude:
          </Text>
          <Text>{location.longitude}</Text>

          <Text style={styles.text}>
            Accuracy:
          </Text>
          <Text>{location.accuracy} meters</Text>
        </View>
      ) : (
        <Text>No Location Found</Text>
      )}

      <Pressable
        style={styles.button}
        onPress={getLocation}
      >
        <Text style={styles.buttonText}>
          Refresh Location
        </Text>
      </Pressable>

      <Pressable
        style={styles.copyButton}
        onPress={copyLocation}
      >
        <Text style={styles.buttonText}>
          Copy Location
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },

  text: {
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  copyButton: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});