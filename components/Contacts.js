import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function Contacts({ navigation }) {
  //   const loadScene = () => {
  //     navigation.goBack()
  //   }
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Страница про нас</Text>
      {/* <Button title="Вернуться на главную" onPress={loadScene} /> */}
    </View>
  )
}

const styles = StyleSheet.create({})
