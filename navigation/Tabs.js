import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import AttendanceCheck from "../screen/AttendanceCheck";
import WriteStudentId from "../screen/WriteStudentId";
import AddClass from "../screen/AddClass";
import Setting from "../screen/Setting";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "출석확인";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          // let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          let iconName = "";
          if (route.name === "출석확인") {
            iconName += "table";
          } else if (route.name === "학번수정") {
            iconName += "idcard";
          } else if (route.name === "수업추가") {
            iconName += "pluscircleo";
          } else if (route.name === "설정") {
            iconName += "setting";
          }
          return (
            <AntDesign
              name={iconName}
              color={focused ? "black" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: "white",
          // borderTopColor: "white",
          selectedTextColor: "white",
        },
      }}
    >
      <Tabs.Screen name="출석확인" component={AttendanceCheck} />
      <Tabs.Screen name="학번수정" component={WriteStudentId} />
      <Tabs.Screen name="수업추가" component={AddClass} />
      <Tabs.Screen name="설정" component={Setting} />
    </Tabs.Navigator>
  );
};
