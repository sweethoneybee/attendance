import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default ({ buttonText, onPress }) => (
  <View style={styles.mainContainer}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textInButton}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: "85%",
    left: "80%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 4.5,
    width: 50,
    height: 50,
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  textInButton: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10%",
  },
});
