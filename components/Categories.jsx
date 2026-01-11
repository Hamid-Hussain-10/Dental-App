import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
    marginBottom: 10,
  },

});
