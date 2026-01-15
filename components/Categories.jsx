import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const categories = [
  {
    id: "1",
    label: "Care",
    icon: "heart",
    color: "#4a90e2",
  },
  {
    id: "2",
    label: "Kids",
    icon: "child",
    color: "#2ec4b6",
  },
  {
    id: "3",
    label: "Skin",
    icon: "smile-o",
    color: "#50c0e9",
  },
  {
    id: "4",
    label: "Mind",
    icon: "lightbulb-o",
    color: "#f08a5d",
  },
  {
    id: "5",
    label: "Fitness",
    icon: "heartbeat",
    color: "#ef476f",
  },
  {
    id: "6",
    label: "Nutrition",
    icon: "leaf",
    color: "#06d6a0",
  },
  {
    id: "7",
    label: "Vision",
    icon: "eye",
    color: "#8ecae6",
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Categories</Text>
        <Text style={styles.SeeAll}>See All</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", marginHorizontal: 12 }}>
              <View style={[styles.list, { backgroundColor: item.color }]}>
                <FontAwesome name={item.icon} size={24} color={"#ffff"} />
              </View>
              <Text style={{ marginTop: 6 }}>{item.label}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
    marginBottom: 10,
  },
  SeeAll: {
    fontSize: 16,
    fontWeight: "500",
    color: "#454242",
    marginBottom: 10,
  },
  categoriesContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 24,
    borderRadius: 24,
  },
  list: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
