import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import FirstStart from "./screen/FirstStart";
import * as SplashScreen from "expo-splash-screen";
import Stack from "./navigation/Stack";

const cacheFonrts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

const getDataFromAsyncStorage = async (dataName) => {
  try {
    return await AsyncStorage.getItem(dataName);
  } catch (e) {}
};
export default function App() {
  const [assetIsReady, setAssetIsReady] = useState(false);

  const [studentIdIsReady, setStudentIdIsReady] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    Maple_ttf: require("./assets/Maplestory_Light.ttf"),
    Maple_otf: require("./assets/Maplestory_OTF_Light.otf"),
    GodoM_ttf: require("./assets/GodoM.ttf"),
    GodoM_otf: require("./assets/GodoM.otf"),
  });

  const testSetting = async () => {
    // developer's student id
    await AsyncStorage.setItem("StudentId", "2016047883");
    await AsyncStorage.removeItem("StudentId");
    let classList = {};
    await AsyncStorage.setItem("ClassList", JSON.stringify(classList));
  };
  const _loadAssetsAsync = async () => {
    await SplashScreen.preventAutoHideAsync();
    // testSetting();
    const fontAssets = cacheFonrts([FontAwesome.font]);

    const semester = await getDataFromAsyncStorage("Semester");
    if (semester === null) {
      await AsyncStorage.setItem("Semester", "2");
    }
    const id = await getDataFromAsyncStorage("StudentId");
    if (id !== null) {
      setStudentIdIsReady(true);
    }
    await Promise.all([...fontAssets]);
    await SplashScreen.hideAsync();
  };

  if (assetIsReady && fontsLoaded) {
    if (!studentIdIsReady) {
      return <FirstStart setStudentIdIsReady={setStudentIdIsReady} />;
    } else {
      return (
        <>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
          <StatusBar barStyle="light-content" />
        </>
      );
    }
  } else {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => {
          setAssetIsReady(true);
        }}
        onError={(error) => {
          console.error("Error during loading", error);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
