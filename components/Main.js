import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Contacts")
  }
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
      <Button title="Открыть страницу" onPress={loadScene} />
    </View>
  )
}

// const styles = StyleSheet.create({})
