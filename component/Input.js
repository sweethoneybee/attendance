import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default ({ title, onChangeText, value, maxLength = 20 }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.inputTitle}>{title}</Text>
    <TextInput
      style={styles.input}
      onChangeText={(text) => {
        onChangeText(text);
        console.log(text);
      }}
      placeholder={value}
      autoCorrect={false}
      maxLength={maxLength}
      autoCapitalize={"characters"}
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: "5%",
  },
  inputTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    paddingLeft: 5,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
  },
});
