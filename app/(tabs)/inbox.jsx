import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";

import InboxTabs from "../../components/InboxTabs";
import { notifications } from "../../components/data";

export default function Inbox() {
  const router = useRouter();

  const [data, setData] = useState(notifications);

  const markAsRead = (id) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  return (
    <LinearGradient
      colors={["#4CB2B3", "#ffffff"]}
      locations={[0.1, 1]}
      style={{ flex: 1 }}
    >
      <View style={styles.headContainer}>
        <Pressable style={styles.icon} onPress={() => router.push("/")}>
          <FontAwesome name="angle-left" size={22} color="#ffffff" />
        </Pressable>

        <Text style={styles.headerText}>My Inbox</Text>

        <Pressable style={styles.icon}>
          <FontAwesome name="ellipsis-v" size={20} color="#c3ff00" />
        </Pressable>
      </View>

      <InboxTabs data={data} onRead={markAsRead} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#ffffff",
  },
  icon: {
    width: 46,
    height: 46,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
});
