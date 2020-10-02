import React, { useState } from "react";
import AddClassPresenter from "./AddClassPresenter";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation, route }) => {
  const [haksuNumber, setHaksuNumber] = useState("ex) ITE2037");
  const [classNumber, setClassNumber] = useState("ex) 11821");
  const [className, setClassName] = useState("ex) 객체지향");
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    isAdd = false;
    return () => {
      // refresh
    };
  }, [isAdd]);
  const makeClassDto = () => {
    return {
      classId: haksuNumber + classNumber,
      className,
    };
  };
  const onPress = async () => {
    let { classId, className } = makeClassDto();
    console.log("classId: " + classId + ", className: " + className);
    let classList = await AsyncStorage.getItem("ClassList");
    classList = classList !== null ? JSON.parse(classList) : {};
    classList[classId] = className;
    await AsyncStorage.setItem("ClassList", JSON.stringify(classList));
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
      buttonText={"수업추가"}
    />
  );
};
