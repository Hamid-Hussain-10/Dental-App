import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const doctor = {
  name: "Dr. John Khan",
  specialty: "General Medicine",
  image: require("../../assets/images/doctor3.jpg"),
};

const dentalDoctor = [
  {
    id: "1",
    name: "Dr. John Khan",
    specialty: "Dental Surgeon",
    price: 500,
    image: require("../../assets/images/doctor1.jpg"),
  },
  {
    id: "2",
    name: "Dr. Sarah Ahmed",
    specialty: "Orthodontist",
    price: 700,
    image: require("../../assets/images/doctor2.jpg"),
  },
  {
    id: "3",
    name: "Dr. Olivia Grant",
    specialty: "Family Physician",
    price: 800,
    image: require("../../assets/images/doctor1.jpg"),
  },
  {
    id: "4",
    name: "Dr. Matthew Smith",
    specialty: "Cardiologist",
    price: 600,
    image: require("../../assets/images/doctor2.jpg"),
  },
];


export default function Consultation() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#4CB2B3", "#ffffff"]}
      locations={[0.1, 1]}
      style={{ flex: 1 }}
    >
      {/* Fixed Header */}
      <View style={styles.headContainer}>
        <Pressable style={styles.icon} onPress={() => router.push("/")}>
          <FontAwesome name="angle-left" size={22} color="#000" />
        </Pressable>

        <Text style={styles.headerText}>My Consultation</Text>

        <Pressable style={styles.icon}>
          <FontAwesome name="ellipsis-v" size={20} color="#000" />
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Lab Result */}
        <View style={styles.labResultContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.icon1}>
              <FontAwesome name="medkit" size={20} color="#a1b616" />
            </View>

            <Text style={styles.title}>Lab Result Ready</Text>
            <Text style={styles.subText}>Your new report is available</Text>
          </View>

          <Pressable style={styles.actionBtn}>
            <Text style={styles.btnText}>View</Text>
            <FontAwesome name="angle-right" size={16} color="#fff" />
          </Pressable>
        </View>

        {/* Upcoming Doctor */}
        <Text style={styles.sectionTitle}>Upcoming</Text>

        <View style={styles.doctorCard}>
          <View style={styles.doctorTopRow}>
            <Image source={doctor.image} style={styles.avatar} />

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{doctor.name}</Text>
              <Text style={styles.subText}>{doctor.specialty}</Text>
            </View>

            <Pressable style={styles.smallBtn}>
              <Text style={styles.btnText}>Change</Text>
            </Pressable>
          </View>

          <View style={styles.scheduleRow}>
            <View style={styles.scheduleItem}>
              <FontAwesome name="calendar" size={18} color="#4CB2B3" />
              <Text style={styles.subText}>10 January</Text>
            </View>

            <View style={styles.scheduleItem}>
              <FontAwesome name="clock-o" size={18} color="#4CB2B3" />
              <Text style={styles.subText}>10:00 AM</Text>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={styles.actionBtn}>
              <Text style={styles.btnText}>Schedule</Text>
            </Pressable>

            <Pressable style={styles.actionBtn}>
              <Text style={styles.btnText}>View Profile</Text>
            </Pressable>
          </View>
        </View>

        {/* Dental Doctors */}
        <Text style={styles.sectionTitle}>Dental Doctors</Text>

        <FlatList
          data={dentalDoctor}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.doctorCard}>
              <View style={styles.doctorTopRowLast}>
                <Image source={item.image} style={styles.avatar} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subText}>{item.specialty}</Text>
                </View>

                <Pressable style={styles.smallBtn}>
                  <Text style={styles.btnText}>Rs {item.price}</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
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
    fontWeight: "600",
  },
  icon: {
    width: 46,
    height: 46,
    backgroundColor: "#fff",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  labResultContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    padding: 16,
    borderRadius: 22,
    alignItems: "center",
    marginBottom: 20,
  },
  icon1: {
    width: 46,
    height: 46,
    backgroundColor: "#cbe3df",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 16,
    marginVertical: 10,
  },
  doctorCard: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 22,
    padding: 14,
    marginBottom: 14,
  },
  doctorTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    borderBottomWidth: 1,
    borderColor: "#4CB2B3",
    paddingBottom: 16,
  },
  doctorTopRowLast: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
  },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  scheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CB2B3",
    borderRadius: 20,
    paddingHorizontal: 18,
    height: 40,
    gap: 6,
  },

  smallBtn: {
    backgroundColor: "#a1b616",
    borderRadius: 18,
    paddingHorizontal: 16,
    height: 36,
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  subText: {
    fontSize: 16,
    color: "#777",
  },
});
