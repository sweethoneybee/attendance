import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default ({ buttonStyle, children, onPress }) => (
  <TouchableOpacity
    style={buttonStyle !== undefined ? buttonStyle : styles.button}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
  },
  // textInButton: {
  //   fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
  //   fontSize: 15,
  // },
});
