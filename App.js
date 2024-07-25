import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import * as Font from "expo-font"
import { useState } from "react"
import AppLoading from "expo-app-loading"
import MainStack from "./navigate"

const fonts = () => {
  Font.loadAsync({
    "mt-italic": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "mt-Variable": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  })
}

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return <MainStack />
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
  }
}

const styles = StyleSheet.create({})
