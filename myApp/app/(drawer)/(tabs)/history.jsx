import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

export default function HistoryScreen() {
  const [surveys, setSurveys] = useState([
    {
      id: "1",
      site: "Swaminarayan University",
      client: "CodingGita",
      priority: "High",
      date: "18 Jul 2026",
    },
    {
      id: "2",
      site: "Tirupati Automobiles",
      client: "MFC Garage",
      priority: "Medium",
      date: "17 Jul 2026",
    },
    {
      id: "3",
      site: "ABC Industries",
      client: "ABC Ltd",
      priority: "Low",
      date: "15 Jul 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = surveys.filter((item) => {
    const matchesSearch =
      item.site.toLowerCase().includes(search.toLowerCase()) ||
      item.client.toLowerCase().includes(search.toLowerCase());

    const matchesPriority =
      filter === "All" || item.priority === filter;

    return matchesSearch && matchesPriority;
  });

  const deleteSurvey = (id) => {
    Alert.alert(
      "Delete Survey",
      "Are you sure you want to delete this survey?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setSurveys((prev) =>
              prev.filter((item) => item.id !== id)
            );
          },
        },
      ]
    );
  };

  const viewDetails = (item) => {
    Alert.alert(
      "Survey Details",
      `Site: ${item.site}
Client: ${item.client}
Priority: ${item.priority}
Date: ${item.date}`
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.site}</Text>

      <Text>Client: {item.client}</Text>
      <Text>Priority: {item.priority}</Text>
      <Text>Date: {item.date}</Text>

      <View style={styles.row}>
        <Pressable
          style={styles.viewBtn}
          onPress={() => viewDetails(item)}
        >
          <Text style={styles.btnText}>View</Text>
        </Pressable>

        <Pressable
          style={styles.deleteBtn}
          onPress={() => deleteSurvey(item.id)}
        >
          <Text style={styles.btnText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Survey History
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Search Survey..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filterRow}>
        {["All", "High", "Medium", "Low"].map((item) => (
          <Pressable
            key={item}
            style={[
              styles.filterBtn,
              filter === item && styles.activeFilter,
            ]}
            onPress={() => setFilter(item)}
          >
            <Text style={styles.filterText}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No Surveys Found
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F5F5F5",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  filterBtn: {
    backgroundColor: "#D1D5DB",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 3,
    alignItems: "center",
  },

  activeFilter: {
    backgroundColor: "#2563EB",
  },

  filterText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  viewBtn: {
    backgroundColor: "#16A34A",
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },

  deleteBtn: {
    backgroundColor: "#EF4444",
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },
});