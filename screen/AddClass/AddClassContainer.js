import React, { useState } from "react";
import { Alert } from "react-native";
import AddClassPresenter from "./AddClassPresenter";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation, route }) => {
  const [haksuNumber, setHaksuNumber] = useState("ex) ITE2037");
  const [classNumber, setClassNumber] = useState("ex) 11821");
  const [className, setClassName] = useState("ex) 객체지향");

  const makeClassDto = () => {
    return {
      classId: haksuNumber + classNumber,
      className,
    };
  };
  const onPress = async () => {
    // 값이 잘 들어왔는지 검사하는 로직이 필요함
    if((haksuNumber === "ex) ITE2037" ||
    classNumber === "ex) 11821" ||
    className === "ex) 객체지향")
    || (haksuNumber.match(/[A-Z]{3}\d{4}/) === null ||
    classNumber.match(/\d{5}/) === null ||
    className === "")) {
      Alert.alert(
        "잘못된 수업 정보",
        "양식에 맞게 적어주세요",
        {
          text: "네",
        },
      );
      return;
    }
    let { classId, className } = makeClassDto();
    
    console.log("classId: " + classId + ", className: " + className);
    let classList = await AsyncStorage.getItem("ClassList");
    classList = classList !== null ? JSON.parse(classList) : {};
    classList[classId] = className;
    await AsyncStorage.setItem("ClassList", JSON.stringify(classList));
    setHaksuNumber("ex) ITE2037");
    setClassNumber("ex) 11821");
    setClassName("ex) 객체지향");
    route.params.refreshFn();
    navigation.navigate("Tabs");
  };
  console.log("학수번호: " + haksuNumber);
  console.log("수업번호: " + classNumber);
  console.log("수업이름: " + className);

  const titles = ["학수번호", "수업번호", "수업이름"];
  const stateValue = [haksuNumber, classNumber, className];
  const setFunc = [setHaksuNumber, setClassNumber, setClassName];
  return (
    <AddClassPresenter
      navigation={navigation}
      route={route}
      onPress={onPress}
      titles={titles}
      onChangeText={setFunc}
      value={stateValue}
    />
  );
};
