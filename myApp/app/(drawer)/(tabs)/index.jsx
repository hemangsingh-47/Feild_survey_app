import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Smart Field Survey</Text>
        <Text style={styles.subtitle}>Welcome Hemang</Text>
      </View>

      {/* Student Details */}
      <View style={styles.card}>
        <Text style={styles.heading}>Student Details</Text>

        <Text>Name : Hemang Singh</Text>
        <Text>ID : SUK250054CE103</Text>
        <Text>Course : React Native</Text>
      </View>

      {/* Survey Count */}
      <View style={styles.countCard}>
        <Text style={styles.countTitle}>Today's Survey</Text>
        <Text style={styles.count}>12</Text>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.row}>
        <Pressable
          style={styles.actionCard}
          onPress={() => router.push("/(drawer)/(tabs)/survey")}
        >
          <Text style={styles.actionText}>📝</Text>
          <Text>New Survey</Text>
        </Pressable>

        <Pressable
          style={styles.actionCard}
          onPress={() => router.push("/(drawer)/camera")}
        >
          <Text style={styles.actionText}>📷</Text>
          <Text>Camera</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={styles.actionCard}
          onPress={() => router.push("/(drawer)/location")}
        >
          <Text style={styles.actionText}>📍</Text>
          <Text>Location</Text>
        </Pressable>

        <Pressable
          style={styles.actionCard}
          onPress={() => router.push("/(drawer)/contacts")}
        >
          <Text style={styles.actionText}>👤</Text>
          <Text>Contacts</Text>
        </Pressable>
      </View>

      {/* Recent Survey */}
      <Text style={styles.sectionTitle}>Recent Surveys</Text>

      <View style={styles.card}>
        <Text>Reliance Tower</Text>
        <Text>Ahmedabad</Text>
      </View>

      <View style={styles.card}>
        <Text>Solar Plant</Text>
        <Text>Rajkot</Text>
      </View>

      <View style={styles.card}>
        <Text>Jio Office</Text>
        <Text>Gandhinagar</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#0e0d0d",
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  countCard: {
    backgroundColor: "#151313",
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },

  countTitle: {
    color: "#fff",
    fontSize: 18,
  },

  count: {
    fontSize: 45,
    color: "#fff",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  actionCard: {
    backgroundColor: "#fff",
    width: "42%",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    elevation: 3,
    marginBottom: 15,
  },

  actionText: {
    fontSize: 30,
    marginBottom: 8,
  },
});