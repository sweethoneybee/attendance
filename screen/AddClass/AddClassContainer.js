import React, { useState } from "react";
import AddClassPresenter from "./AddClassPresenter";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ navigation, route }) => {
  const [haksuNumber, setHaksuNumber] = useState("ex) ITE2037");
  const [classNumber, setClassNumber] = useState("ex) 15523");
  const [className, setClassName] = useState("ex) 컴구");
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

  return (
    <AddClassPresenter
      navigation={navigation}
      route={route}
      onPress={onPress}
      haksuNumber={haksuNumber}
      setHaksuNumber={setHaksuNumber}
      classNumber={classNumber}
      setClassNumber={setClassNumber}
      className={className}
      setClassName={setClassName}
    />
  );
};
