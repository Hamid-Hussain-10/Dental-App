import { View, StyleSheet, Image, StatusBar, Text } from "react-native";
import React from "react";
import SwipeButton from "../components/SwipeButton";
import { useRouter } from "expo-router";

const FirstScreen = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4CB2B3" />

      <View style={styles.container}>
        <Image
          source={require("../assets/images/screen-image.png")}
          style={styles.bgImage}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Connect With Trusted Doctors Instantly
          </Text>

          <Text style={styles.subtitle}>
            Skip the waiting room. Chat with licensed doctors, get
            prescriptions, and manage your health from anywhere, all in one app.
          </Text>
        </View>

        <SwipeButton onComplete={() => router.replace("(tabs)")} />
      </View>
    </>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: "60%",
  },
  textContainer: {
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 10,
    textAlign: "start",
  },
  subtitle: {
    fontSize: 18,
    color: "#000000",
    textAlign: "start",
    lineHeight: 22,
  },
});
