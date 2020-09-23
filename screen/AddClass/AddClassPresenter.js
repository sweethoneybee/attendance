import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../component/Input";
import ScreenContainer from "../../component/ScreenContainer";
import AddButton from "../../component/AddButton";
export default ({
  onPress,
  haksuNumber,
  setHaksuNumber,
  classNumber,
  setClassNumber,
  className,
  setClassName,
}) => (
  <ScreenContainer title={""}>
    <View style={styles.mainContainer}>
      <Input
        title={"학수번호"}
        onChangeText={setHaksuNumber}
        value={haksuNumber}
      />
      <Input
        title={"수업번호"}
        onChangeText={setClassNumber}
        value={classNumber}
      />
      <Input title={"수업이름"} onChangeText={setClassName} value={className} />
      <AddButton buttonText={"수업추가"} onPress={onPress} />
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: "center",
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
