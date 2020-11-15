import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default () => (
  <View style={styles.mainContainer}>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>쉿, 로딩중 🤫</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "#3498db",
  },
  contentContainer: {
    marginTop: "80%",
  },
  content: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
    color: "white",
  },
});
