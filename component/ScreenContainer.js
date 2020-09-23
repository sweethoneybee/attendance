import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ title, children }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.titleContainer}>{title}</Text>
    <View style={{ margin: "10%" }}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { height: "100%", backgroundColor: "white" },
  titleContainer: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 24,
    textAlign: "center",
    marginTop: "5%",
  },
});
