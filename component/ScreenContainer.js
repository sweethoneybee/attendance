import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title, children }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.titleContainer}>{title}</Text>
    <View style={styles.childrenContainer}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { height: "100%", width: "100%", backgroundColor: "white" },
  titleContainer: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 32,
    textAlign: "center",
    marginTop: "45%",
  },
  childrenContainer: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 22,
  },
});
