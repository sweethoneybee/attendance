import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../component/Input";
import ScreenContainer from "../../component/ScreenContainer";
import AddButton from "../../component/AddButton";
import AddClassButton from "../../component/AddClassButton";

export default ({
  navigation,
  route,
  onPress,
  title,
  onChangeText,
  value,
  buttonText,
}) => {
  return (
    <ScreenContainer title={"이얏호우"}>
      <View style={styles.mainContainer}>
        <Input title={title} onChangeText={onChangeText} value={value} />
        <AddButton buttonText={buttonText} onPress={onPress} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: "center",
  },
});
