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
    image: require("../assets/images/doctor1.jpg"),
  },
  {
    id: "2",
    name: "Dr. Matthew Smith",
    specialty: "Cardiologist",
    rating: 4.6,
    image: require("../assets/images/doctor2.jpg"),
  },
  {
    id: "3",
    name: "Dr. Sarah Ahmed",
    specialty: "Dermatologist",
    rating: 4.9,
    image: require("../assets/images/doctor3.jpg"),
  },
  {
    id: "4",
    name: "Dr. John Khan",
    specialty: "Pediatrician",
    rating: 4.7,
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
      <View style={styles.cardContainer}>
        <FlatList
          data={doctors}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LinearGradient
              colors={["#b0f2ee", "#59d0ca", "#36b3b5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <Image source={item.image} style={styles.avatar} />

              <View style={styles.doctorDetail}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
              </View>

              <View style={styles.ratingRow}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </LinearGradient>
          )}
        />
      </View>
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
    marginBottom: 12,
    paddingHorizontal: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
  },

  seeAll: {
    fontSize: 16,
    fontWeight: "500",
    color: "#454242",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  card: {
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    marginRight: 12,
    width: 200,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },

  specialty: {
    fontSize: 12,
    marginTop: 2,
    textAlign: "center",
    color: "#f0f0f0",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  rating: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
  },
});
