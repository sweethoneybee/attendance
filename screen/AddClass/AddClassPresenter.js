import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../component/Input";
import ScreenContainer from "../../component/ScreenContainer";

export default ({
  onClick,
  haksuNumber,
  setHaksuNumber,
  classNumber,
  setClassNumber,
  className,
  setClassName,
}) => (
  <ScreenContainer title={"수업추가"}>
    <View style={styles.mainContainer}>
      <Input
        title={"학수번호(7자. ex) ITE2037"}
        onChangeText={setHaksuNumber}
        value={haksuNumber}
      />
      <TouchableOpacity style={styles.button}>
        <Text>하이</Text>
      </TouchableOpacity>
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
  },
});

{
  /* <View style={{ height: "100%", backgroundColor: "white" }}>
      <Text style={styles.title}>수업추가</Text>
      <View style={{ margin: "10%" }}>
        <Input
          title={"학수번호(7자. ex) ITE2037"}
          onChangeText={setHaksuNumber}
          value={haksuNumber}
        />
      </View>
    </View> */
}
