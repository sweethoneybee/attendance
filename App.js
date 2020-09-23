import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import Stack from "./navigation/Stack";

const cacheFonrts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

export default function App() {
  const [assetIsReady, setAssetIsReady] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    Maple_ttf: require("./assets/Maplestory_Light.ttf"),
    Maple_otf: require("./assets/Maplestory_OTF_Light.otf"),
    GodoM_ttf: require("./assets/GodoM.ttf"),
    GodoM_otf: require("./assets/GodoM.otf"),
  });

  const _loadAssetsAsync = async () => {
    const fontAssets = cacheFonrts([FontAwesome.font]);
    //for Test
    let classList = {};
    classList["ITE203711821"] = "객체지향";
    classList["EDU308010529"] = "학폭이";
    // classList["DEE203510528"] = "영어강의";
    // await AsyncStorage.setItem("StudentId", "2016047756");
    await AsyncStorage.setItem("StudentId", "2016047883");
    await AsyncStorage.setItem("ClassList", JSON.stringify(classList));
    await Promise.all([...fontAssets]);
  };

  if (assetIsReady && fontsLoaded) {
    return (
      <>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </>
    );
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
