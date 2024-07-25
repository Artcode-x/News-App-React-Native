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

// Если шрифты еще не были подключены - показываем загрузку страницы/лоадер

export default function App() {
  // указываем что шрифты изн-но не подключены
  const [font, setFont] = useState(false)

  if (font) {
    return <MainStack />
  } else {
    // с пом-ю startAsync мы хотим сделать некую асинхроннную подгрузку
    // onFinish - сработает в момент когда подгрузка завершится
    // когда шрифты будут подгружены, меняем зн-ие в стейте, лоадер прекращает работу и загр-ся приложение
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
  }
}

const styles = StyleSheet.create({})
