import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AttendanceDetail from "../screen/AttendanceDetail";
import AddClass from "../screen/AddClass";
import WriteStudentId from "../screen/WriteStudentId";
import Github from "../screen/Github";
import Explanation from "../screen/Explanation";
import Semester from "../screen/Semester";
import Tabs from "../navigation/Tabs";
const Stack = createStackNavigator();

const headerOptions = {
  gestureEnabled: true,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    backgroundColor: "#3498db",
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};
export default () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="AttendanceDetail"
        component={AttendanceDetail}
        options={{ title: "상세정보", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="AddClass"
        component={AddClass}
        options={{ title: "수업추가", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Semester"
        component={Semester}
        options={{ title: "학기 수정", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="WriteStudentId"
        component={WriteStudentId}
        options={{ title: "학번 수정", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Github"
        component={Github}
        options={{ title: "깃허브", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Explanation"
        component={Explanation}
        options={{ title: "사용법 및 FAQ", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};
