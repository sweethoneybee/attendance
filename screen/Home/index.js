import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React, { useEffect } from "react";

import ClassList from "../ClassList";

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name="ClassList"
          component={ClassList}
          options={{
            headerShown: true,
            title: "수업목록",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
