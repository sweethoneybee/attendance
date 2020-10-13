import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../component/Input";
import ScreenContainer from "../../component/ScreenContainer";
import BasicButton from "../../component/BasicButton";

export default ({ onPress, titles, onChangeText, value, buttonText }) => {
  return (
    <ScreenContainer title={"이얏호우"}>
      <View style={styles.mainContainer}>
        <Input
          title={titles[0]}
          onChangeText={onChangeText[0]}
          value={value[0]}
          maxLength={7}
          feedBack={"\"대문자알파벳 3자 + 숫자 4자\"으로 적어주세요"}
          isValidText={
            (text) => (text.match(/[A-Z]{3}\d{4}/) !== null ? true : false)
          }
          /*
           **  regex
           **  [A-Z]{3}\d{4}
           */
        />
        <Input
          title={titles[1]}
          onChangeText={onChangeText[1]}
          value={value[1]}
          maxLength={5}
          feedBack={"\"숫자 5자\"로 적어주세요"}
          isValidText={(text) => (text.match(/\d{5}/) !== null ? true : false)}
          /*
           **  regex
           **  \d{5}
           */
        />
        <Input
          title={titles[2]}
          onChangeText={onChangeText[2]}
          value={value[2]}
          maxLength={20}
          feedBack={"맘대로 적으셔도 돼요"}
          isValidText={
            (text) => (text !== value[2] && text !== "" ? true : false)
          }
        />
        <BasicButton onPress={onPress}>
          <Text>{buttonText}</Text>
        </BasicButton>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: "center",
  },
});
