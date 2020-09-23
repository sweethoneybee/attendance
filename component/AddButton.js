import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default ({ buttonText, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.textInButton}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 10,
  },
  textInButton: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 15,
  },
});
