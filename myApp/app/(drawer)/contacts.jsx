import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  RefreshControl,
} from "react-native";

import * as Contacts from "expo-contacts";
import * as Clipboard from "expo-clipboard";

export default function ContactsScreen() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    setContacts(data);
    setFilteredContacts(data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getContacts();
    setRefreshing(false);
  };

  const searchContact = (text) => {
    setSearch(text);

    const filtered = contacts.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredContacts(filtered);
  };

  const copyNumber = async (number) => {
    if (!number) {
      Alert.alert("No Number");
      return;
    }

    await Clipboard.setStringAsync(number);

    Alert.alert("Copied", "Number copied successfully");
  };

  const renderItem = ({ item }) => {
    const phone =
      item.phoneNumbers?.length > 0
        ? item.phoneNumbers[0].number
        : null;

    return (
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0)}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>

          <Text>
            {phone ? phone : "No Number"}
          </Text>
        </View>

        {phone && (
          <Pressable
            style={styles.copyBtn}
            onPress={() => copyNumber(phone)}
          >
            <Text style={{ color: "#fff" }}>
              Copy
            </Text>
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>

      <Text style={styles.counter}>
        Total Contacts : {filteredContacts.length}
      </Text>

      <TextInput
        placeholder="Search Contact..."
        style={styles.input}
        value={search}
        onChangeText={searchContact}
      />

      {filteredContacts.length === 0 ? (
        <View style={styles.empty}>
          <Text>No Contacts Found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  counter: {
    marginBottom: 10,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  copyBtn: {
    backgroundColor: "#16A34A",
    padding: 10,
    borderRadius: 8,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});