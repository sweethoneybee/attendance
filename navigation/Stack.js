import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Attendance from "../screen/Attendance";
import AddClass from "../screen/AddClass";
import WriteStudentId from "../screen/WriteStudentId";
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
        options={{ title: "", headerTitleAlign:"center", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="AddClass"
        component={AddClass}
        options={{ title: "수업추가", headerTitleAlign: "center"}}
      />
      <Stack.Screen
        name="WriteStudentId"
        component={WriteStudentId}
        // options={{ title: "", headerTitleAlign:"center", headerBackTitleVisible: false }}
        options={{ title: "학번수정", headerTitleAlign: "center"}}
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
