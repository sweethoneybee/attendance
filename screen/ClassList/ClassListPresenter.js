import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Basic from "../../component/Basic";
import Footer from "../../component/Footer";

const Stack = createStackNavigator();

export default ({ onClick }) => {
  // const footer = <Footer onClick={onClick} text="수업목록" />;
  const footer = (
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
        onPress={() => {}}
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
    </View>
  );

  return (
    <Basic footer={footer}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text
          style={{ textAlign: "center", fontFamily: "Maple_ttf", fontSize: 24 }}
        >
          학번: 2020324991
        </Text>
      </View>
    </Basic>
  );
};
