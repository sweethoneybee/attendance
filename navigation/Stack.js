import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Attendance from "../screen/Attendance";
import AddClass from "../screen/AddClass";
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
        name="Attendance"
        component={Attendance}
        options={{ title: "", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="AddClass_0"
        component={AddClass}
        options={{ title: "", headerBackTitleVisible: false }}
        initialParams={{ page: "0" }}
      />
      <Stack.Screen
        name="AddClass_1"
        component={AddClass}
        options={{ title: "", headerBackTitleVisible: false }}
        initialParams={{ page: "1" }}
      />
      <Stack.Screen
        name="AddClass_2"
        component={AddClass}
        options={{ title: "", headerBackTitleVisible: false }}
        initialParams={{ page: "2" }}
      />
    </Stack.Navigator>
  );
};

// export default () => {
//   return (
//     <Stack.Navigator screenOptions={headerOptions}>
//       <Stack.Screen
//         name="ClassList"
//         component={ClassList}
//         options={{
//           headerShown: true,
//           title: "수업목록",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
