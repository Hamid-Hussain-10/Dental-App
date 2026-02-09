import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const MenuItem = ({ label, icon }) => (
    <Pressable style={styles.personalInformation}>
      <View style={styles.infoRow}>
        <View style={styles.iconBox}>
          <FontAwesome name={icon} size={18} color="#4CB2B3" />
        </View>
        <Text style={styles.infoText}>{label}</Text>
      </View>
    </Pressable>
  );

  return (
    <LinearGradient
      colors={["#4CB2B3", "#ffffff"]}
      locations={[0.1, 1]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Pressable style={styles.icon} onPress={() => router.back()}>
          <FontAwesome name="angle-left" size={24} color="#ffffff" />
        </Pressable>

        <Text style={styles.headerText}>Profile</Text>

        <Pressable style={styles.icon}>
          <FontAwesome name="heart" size={20} color="#c3ff00" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.image}
          />
          <Text style={styles.name}>Majid Khan</Text>
          <Text style={styles.role}>Patient</Text>
        </View>

        <MenuItem label="Personal Information" icon="user" />
        <MenuItem label="My Appointment" icon="calendar" />
        <MenuItem label="Medical History" icon="file-text" />
        <MenuItem label="Payment Method" icon="credit-card" />

        <Pressable style={styles.logoutBtn} onPress={() => router.replace("/")}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    paddingTop: 40,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff",
  },

  icon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
  },

  role: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },

  personalInformation: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eaf7f6",
    justifyContent: "center",
    alignItems: "center",
  },

  infoText: {
    fontSize: 16,
    fontWeight: "500",
  },

  logoutBtn: {
    width: 120,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e63333",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
  },
});
