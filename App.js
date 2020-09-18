import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Home from "./screen/Home";

const cacheFonrts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

export default function App() {
  const [assetIsReady, setAssetIsReady] = useState(false);

  const [fontsLoaded] = Font.useFonts({
    Maple_ttf: require("./assets/Maplestory_Light.ttf"),
    Maple_otf: require("./assets/Maplestory_OTF_Light.otf"),
  });

  const _loadAssetsAsync = async () => {
    const fontAssets = cacheFonrts([FontAwesome.font]);

    await Promise.all([...fontAssets]);
  };

  if (assetIsReady && fontsLoaded) {
    return <Home />;
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
