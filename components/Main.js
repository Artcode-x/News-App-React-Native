import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
    </View>
  )
}

// const styles = StyleSheet.create({})
