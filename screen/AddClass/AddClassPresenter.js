import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../component/Input";
import ScreenContainer from "../../component/ScreenContainer";
import AddButton from "../../component/AddButton";
import AddClassButton from "../../component/AddClassButton";

export default ({ onPress, titles, onChangeText, value, buttonText }) => {
  return (
    <ScreenContainer title={"이얏호우"}>
      <View style={styles.mainContainer}>
        <Input
          title={titles[0]}
          onChangeText={onChangeText[0]}
          value={value[0]}
        />
        <Input
          title={titles[1]}
          onChangeText={onChangeText[1]}
          value={value[1]}
        />
        <Input
          title={titles[2]}
          onChangeText={onChangeText[2]}
          value={value[2]}
        />
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
