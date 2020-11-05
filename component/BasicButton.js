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
    padding: 10,
  },
});
