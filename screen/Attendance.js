import React from "react";
import { View, Text, Button } from "react-native";

export default ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
