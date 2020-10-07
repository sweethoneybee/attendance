import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Input from "../../component/Input";
import BasicButton from "../../component/BasicButton";

export default ({ onChangeText, value, onPress }) => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ height: "20%" }} />
      <Input
        title={"학번입력"}
        onChangeText={onChangeText}
        value={value}
        maxLength={10}
        /*
         **  regex
         **  \d{10}
         */
      />
      <BasicButton buttonStyle={styles.button} onPress={onPress}>
        <Text>{"학번수정하기"}</Text>
      </BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  // title: {
  //   textAlign: "center",
  //   fontFamily: "Maple_ttf",
  //   fontSize: 24,
  // },
  button: {
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
  },
});
