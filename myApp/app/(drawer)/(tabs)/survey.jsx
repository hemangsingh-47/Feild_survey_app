import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

export default function Survey() {
  const [siteName, setSiteName] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (
      !siteName ||
      !clientName ||
      !description ||
      !priority ||
      !date
    ) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    const survey = {
      siteName,
      clientName,
      description,
      priority,
      date,
    };

    console.log(survey);

    Alert.alert("Success", "Survey Created Successfully");

    setSiteName("");
    setClientName("");
    setDescription("");
    setPriority("");
    setDate("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Create New Survey</Text>

      <TextInput
        placeholder="Site Name"
        style={styles.input}
        value={siteName}
        onChangeText={setSiteName}
      />

      <TextInput
        placeholder="Client Name"
        style={styles.input}
        value={clientName}
        onChangeText={setClientName}
      />

      <TextInput
        placeholder="Description"
        multiline
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Priority (High / Medium / Low)"
        style={styles.input}
        value={priority}
        onChangeText={setPriority}
      />

      <TextInput
        placeholder="Date (DD/MM/YYYY)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Pressable
        style={styles.button}
        onPress={handleSubmit}
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
    padding: 20,
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    elevation: 2,
  },

  button: {
    backgroundColor: "#030303",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});