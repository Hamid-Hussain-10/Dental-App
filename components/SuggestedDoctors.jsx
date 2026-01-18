import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const doctors = [
  {
    id: "1",
    name: "Dr. Olivia Grant",
    specialty: "Family Physician",
    rating: 4.8,
    availableTime: "10:00 AM - 1:00 PM",
    image: require("../assets/images/doctor1.jpg"),
  },
  {
    id: "2",
    name: "Dr. Matthew Smith",
    specialty: "Cardiologist",
    rating: 4.6,
    availableTime: "2:00 PM - 5:00 PM",
    image: require("../assets/images/doctor2.jpg"),
  },
  {
    id: "3",
    name: "Dr. Sarah Ahmed",
    specialty: "Dermatologist",
    rating: 4.9,
    availableTime: "11:30 AM - 3:30 PM",
    image: require("../assets/images/doctor3.jpg"),
  },
  {
    id: "4",
    name: "Dr. John Khan",
    specialty: "Pediatrician",
    rating: 4.7,
    availableTime: "9:00 AM - 12:00 PM",
    image: require("../assets/images/doctor4.jpg"),
  },
];

const SuggestedDoctors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Suggested Doctors</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <FlatList
        data={doctors}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 4 }}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#b0f2ee", "#59d0ca", "#36b3b5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <View style={styles.detailContainer}>
              <Image source={item.image} style={styles.avatar} />

              <View style={styles.doctorDetail}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
              </View>

              <View style={styles.right}>
                <View style={styles.ratingRow}>
                  <FontAwesome name="star" size={14} color="#FFD700" />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.time}>
                Available Timing : {item.availableTime}
              </Text>
            </View>
          </LinearGradient>
        )}
      />
    </View>
  );
};

export default SuggestedDoctors;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
  },

  seeAll: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5a5b5b",
  },

  card: {
    borderRadius: 20,
    padding: 14,
    marginRight: 8,
    width: 310,
  },

  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 16,
    borderColor: "#d9eae9",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  doctorDetail: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  specialty: {
    fontSize: 14,
    marginTop: 2,
    color: "#eefefe",
  },

  right: {
    alignItems: "flex-end",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },

  rating: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
  },

  time: {
    fontSize: 16,
    marginTop: 4,
    color: "#e9fffe",
    fontWeight: "700",
  },
});
