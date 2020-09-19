import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ({ onClick }) => {
  console.log(onClick);
  return (
    <View
      style={{
        justifyContent: "space-between",
        // alignItems: "center",
        height: "100%",
        flexDirection: "row",
        // padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}
        style={{
          height: "100%",
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontFamily: "Maple_ttf" }}>수업목록</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          height: "100%",
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontFamily: "Maple_ttf" }}>학번수정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontFamily: "Maple_ttf" }}>수업추가</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontFamily: "Maple_ttf" }}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
};
