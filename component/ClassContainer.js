import React from "react";
import { View, Text, Platform } from "react-native";

export default ({ className, lectures, absentCount, pass }) => (
  <View style={{ marginTop: 20 }}>
    <Text
      style={{
        textAlign: "left",
        fontFamily: Platform.OS === "ios" ? "Maple_ttf" : "Maple_otf",
      }}
    >
      {className}: {lectures.length - absentCount} / {lectures.length}
      {pass ? " 😉" : " 😱"}
    </Text>
  </View>
);

//         textAlign: "center",
//         fontFamily: "Maple_ttf",
//         fontSize: 24,
