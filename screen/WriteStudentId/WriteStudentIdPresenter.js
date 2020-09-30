import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Input from "../../component/Input";
import AddButton from "../../component/AddButton";

export default ({ onChangeText, value }) => {
  return (
    <View>
      <Text style={styles.title}></Text>
      <Input title={"학번입력"} onChangeText={onChangeText} value={value} />
      <AddButton
        buttonText={"학번수정하기"}
        onPress={() => {
          console.log("학번수정버튼눌림!");
        }}
      />
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
