import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Input from "../../component/Input";
import BasicButton from "../../component/BasicButton";

export default ({ onChangeText, value, onPress }) => {
  return (
    <View>
      <Text style={styles.title}>타이틀</Text>
      <Input
        title={"학번입력"}
        onChangeText={onChangeText}
        value={value}
        /*
         **  regex
         **  \d{10}
         */
      />
      <BasicButton onPress={onPress}>
        <Text>{"학번수정하기"}</Text>
      </BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "Maple_ttf",
    fontSize: 24,
  },
  button: {},
});
