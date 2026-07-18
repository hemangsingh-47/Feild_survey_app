import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function PreviewScreen() {
  const router = useRouter();

  // Dummy Data (Later we'll pass this from the Survey Form)
  const survey = {
    surveyId: "SURVEY-1001",
    siteName: "Swaminarayan University",
    clientName: "CodingGita",
    description: "Building Inspection",
    priority: "High",
    latitude: "23.0276",
    longitude: "72.5714",
    captureTime: new Date().toLocaleString(),
    photo:
      "https://picsum.photos/400",
  };

  const submitSurvey = () => {
    Alert.alert(
      "Success",
      "Survey Submitted Successfully!"
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Survey Preview
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Survey ID</Text>
        <Text>{survey.surveyId}</Text>

        <Text style={styles.label}>Site Name</Text>
        <Text>{survey.siteName}</Text>

        <Text style={styles.label}>Client Name</Text>
        <Text>{survey.clientName}</Text>

        <Text style={styles.label}>Description</Text>
        <Text>{survey.description}</Text>

        <Text style={styles.label}>Priority</Text>
        <Text>{survey.priority}</Text>

        <Text style={styles.label}>Latitude</Text>
        <Text>{survey.latitude}</Text>

        <Text style={styles.label}>Longitude</Text>
        <Text>{survey.longitude}</Text>

        <Text style={styles.label}>Capture Time</Text>
        <Text>{survey.captureTime}</Text>
      </View>

      <Text style={styles.label}>
        Captured Photo
      </Text>

      <Image
        source={{ uri: survey.photo }}
        style={styles.image}
      />

      <Pressable
        style={styles.editButton}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Edit Survey
        </Text>
      </Pressable>

      <Pressable
        style={styles.submitButton}
        onPress={submitSurvey}
      >
        <Text style={styles.buttonText}>
          Submit Survey
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 12,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginVertical: 20,
  },

  editButton: {
    backgroundColor: "#F59E0B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  submitButton: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});