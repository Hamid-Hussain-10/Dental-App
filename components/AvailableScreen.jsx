import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import Categories from "../components/Categories";
import SuggestedDoctors from "../components/SuggestedDoctors";

export default function AvailableScreen() {
  const scrollRef = useRef(null);

  const formatDate = (dateObj) =>
    dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

  const appointments = [
    {
      id: 1,
      doctor: "Dr. John Khan",
      date: formatDate(new Date(2026, 0, 9)),
      time: "09:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Ayesha Malik",
      date: formatDate(new Date(2026, 0, 12)),
      time: "10:30 AM",
    },
    {
      id: 3,
      doctor: "Dr. Ali Raza",
      date: formatDate(new Date(2026, 0, 13)),
      time: "01:15 PM",
    },
    {
      id: 4,
      doctor: "Dr. Sarah Ahmed",
      date: formatDate(new Date(2026, 0, 14)),
      time: "03:45 PM",
    },
    {
      id: 5,
      doctor: "Dr. Faraz",
      date: formatDate(new Date(2026, 0, 15)),
      time: "06:00 PM",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(1);
  const CARD_WIDTH = 315;

  const showNextAppointment = () => {
    if (visibleCount < appointments.length) {
      setVisibleCount((prev) => {
        const next = prev + 1;
        setTimeout(() => {
          scrollRef.current?.scrollTo({
            x: (next - 1) * CARD_WIDTH,
            animated: true,
          });
        }, 50);
        return next;
      });
    }
  };

  return (
    <LinearGradient
      colors={["#6bbbbd", "#ffffff"]}
      locations={[0.1, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>Next Appointment</Text>

        {/* Horizontal Appointment Cards */}
        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {appointments.slice(0, visibleCount).map((item, index) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.leftBg} />
              <View style={styles.content}>
                <View style={styles.leftSection}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/images/calender.png")}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.doctor}>{item.doctor}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>

                {/* Show angle button only on the last visible card */}
                {index === visibleCount - 1 &&
                  visibleCount < appointments.length && (
                    <Pressable
                      style={styles.iconCircle}
                      onPress={showNextAppointment}
                    >
                      <FontAwesome
                        name="angle-right"
                        size={20}
                        color="#121111"
                      />
                    </Pressable>
                  )}
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.categories}>
          <Categories />
        </View>
        <View style={styles.suggestedDoctors}>
          <SuggestedDoctors />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingHorizontal: 6, paddingBottom: 40 },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#151414",
    marginBottom: 12,
    marginTop: 10,
    marginLeft: 4,
  },
  horizontalList: { paddingHorizontal: 6 },
  card: {
    backgroundColor: "#f7f4f4",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
    width: 305,
  },
  leftBg: {
    position: "absolute",
    left: -40,
    top: -10,
    width: 140,
    height: 170,
    backgroundColor: "#38e5d4",
    transform: [{ skewY: "-15deg" }],
    borderRightWidth: 3,
    borderRightColor: "#a1b616",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
  },
  leftSection: { flexDirection: "row", alignItems: "center" },
  imageWrapper: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  image: { width: 130, height: 130 },
  textContainer: { marginLeft: 16 },
  doctor: { fontSize: 16, fontWeight: "600", color: "#111" },
  date: { fontSize: 14, color: "#666", marginTop: 2 },
  time: { fontSize: 20, fontWeight: "600", marginTop: 6, color: "#000" },
  iconCircle: {
    backgroundColor: "#e7e1e1",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  categories: { marginBottom: 25 },
  suggestedDoctors: { paddingBottom: 30 },
});
