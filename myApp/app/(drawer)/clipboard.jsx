import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";

import * as Clipboard from "expo-clipboard";

export default function ClipboardScreen() {
  const [notes, setNotes] = useState("");

  // Dummy Data
  const surveyId = "SURVEY-1001";
  const contactNumber = "9876543210";
  const location = "23.0276, 72.5714";

  // Copy Function
  const copyText = async (text, message) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied", message);
  };

  // Paste Function
  const pasteClipboard = async () => {
    const text = await Clipboard.getStringAsync();
    setNotes(text);
  };

  // Clear Notes
  const clearClipboard = () => {
    setNotes("");
    Alert.alert("Success", "Notes Cleared");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clipboard Module</Text>

      {/* Survey ID */}
      <Pressable
        style={styles.button}
        onPress={() =>
          copyText(surveyId, "Survey ID Copied")
        }
      >
        <Text style={styles.buttonText}>
          Copy Survey ID
        </Text>
      </Pressable>

      {/* Contact */}
      <Pressable
        style={styles.button}
        onPress={() =>
          copyText(contactNumber, "Contact Number Copied")
        }
      >
        <Text style={styles.buttonText}>
          Copy Contact Number
        </Text>
      </Pressable>

      {/* Location */}
      <Pressable
        style={styles.button}
        onPress={() =>
          copyText(location, "Location Copied")
        }
      >
        <Text style={styles.buttonText}>
          Copy Current Location
        </Text>
      </Pressable>

      {/* Notes */}
      <TextInput
        style={styles.input}
        multiline
        placeholder="Paste Notes Here..."
        value={notes}
        onChangeText={setNotes}
      />

      {/* Paste */}
      <Pressable
        style={[styles.button, { backgroundColor: "#16A34A" }]}
        onPress={pasteClipboard}
      >
        <Text style={styles.buttonText}>
          Paste Notes
        </Text>
      </Pressable>

      {/* Clear */}
      <Pressable
        style={[styles.button, { backgroundColor: "#EF4444" }]}
        onPress={clearClipboard}
      >
        <Text style={styles.buttonText}>
          Clear Notes
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 20,
    elevation: 2,
  },
});