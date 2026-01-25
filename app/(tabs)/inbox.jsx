import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import InboxTabs from "../../components/InboxTabs";

export default function Inbox() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#4CB2B3", "#ffffff"]}
      locations={[0.1, 1]}
      style={{ flex: 1 }}
    >
       
      <View style={styles.headContainer}>
        <Pressable style={styles.icon} onPress={() => router.push("/")}>
          <FontAwesome name="angle-left" size={22} color="#000" />
        </Pressable>

        <Text style={styles.headerText}>My Inbox</Text>

        <Pressable style={styles.icon}>
          <FontAwesome name="ellipsis-v" size={20} color="#1d1c1c" />
        </Pressable>
      </View>
      <InboxTabs/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  headContainer: {
    paddingTop: 50,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
  },
  icon: {
    width: 46,
    height: 46,
    backgroundColor: "#fff",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
});
