import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../../component/AddClassInput";
import BasicButton from "../../component/BasicButton";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ onPress, titles, onChangeText, value }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
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
      <View style={styles.inputContainer}>
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
      <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: "white",
    paddingHorizontal: "15%",
    paddingVertical: "5%",
  },
  inputContainer: {
    height: "15%",
    width: "100%",
    // backgroundColor: "yellow",
  },
  button: {
    marginLeft: "30%",
    padding: 10,
    width: "42%",
    height: "100%",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 18,
    borderBottomWidth: 2,
  },
});
