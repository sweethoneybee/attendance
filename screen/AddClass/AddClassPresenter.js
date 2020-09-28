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
  titles,
  stateValue,
  setFunc,
}) => {
  return (
    <ScreenContainer title={"이얏호우"}>
      <View style={styles.mainContainer}>
        <Input
          title={titles[route.params.page]}
          onChangeText={setFunc[route.params.page]}
          value={stateValue[route.params.page]}
        />
        <AddButton
          buttonText={route.params.page === "2" ? "수업 추가" : "다음"}
          onPress={
            route.params.page === "2"
              ? onPress
              : () => {
                  navigation.navigate(
                    route.params.page === "2"
                      ? "Tabs"
                      : "AddClass_" + (Number(route.params.page) + 1)
                  );
                }
          }
        />
      </View>
    </ScreenContainer>
  );
};

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
