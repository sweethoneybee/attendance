import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default ({ title, onChangeText, value }) => (
  <View style={styles.mainContainer}>
    <Text>{title}</Text>
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={(text) => {
        onChangeText(text);
        console.log(text);
      }}
      value={value}
      autoCorrect={false}
      maxLength={12}
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: "5%",
  },
});
