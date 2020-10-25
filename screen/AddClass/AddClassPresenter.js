import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../component/AddClassInput";
import ScreenContainer from "../../component/ScreenContainer";
import BasicButton from "../../component/BasicButton";

export default ({ onPress, titles, onChangeText, value }) => {
  return (
    <ScreenContainer title={""}>
      <View style={styles.mainContainer}>
        <Input
          title={titles[0]}
          onChangeText={onChangeText[0]}
          value={value[0]}
          maxLength={7}
          feedBack={'"대문자알파벳 3자 + 숫자 4자"로 적어주세요'}
          isValidText={(text) =>
            text.match(/[A-Z]{3}\d{4}/) !== null ? true : false
          }
          /*
           **  regex
           **  [A-Z]{3}\d{4}
           */
        />
      </View>
      <View style={styles.mainContainer}>
        <Input
          title={titles[1]}
          onChangeText={onChangeText[1]}
          value={value[1]}
          maxLength={5}
          feedBack={'"숫자 5자"로 적어주세요'}
          isValidText={(text) => (text.match(/\d{5}/) !== null ? true : false)}
          keyboardType={"number-pad"}
          /*
           **  regex
           **  \d{5}
           */
        />
      </View>
      <View style={styles.mainContainer}>
        <Input
          title={titles[2]}
          onChangeText={onChangeText[2]}
          value={value[2]}
          maxLength={20}
          feedBack={"맘대로 적으셔도 돼요"}
          isValidText={(text) =>
            text !== value[2] && text !== "" ? true : false
          }
        />
      </View>
      <BasicButton onPress={onPress} style={styles.button}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        >
          <Text style={styles.buttonText}>{"수업 추가"}</Text>
        </View>
      </BasicButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "23%",
    width: "100%",
  },
  button: {
    marginLeft: "30%",
    padding: 10,
    width: "40%",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 18,
    borderBottomWidth: 6,
  },
});
