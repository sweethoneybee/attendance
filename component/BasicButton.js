import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default ({ style, children, onPress }) => (
  <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // backgroundColor: "#3498db",
    padding: 10,
    // width: "40%",
    // borderRadius: 10
  },
  // textInButton: {
  //   fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
  //   fontSize: 15,
  // },
});
