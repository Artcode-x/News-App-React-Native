import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function FullInfo({ route }) {
  // route - передается точно также, как и navigation. Передается в автоматическом режиме через Stack navigation
  // через route можем получить все данные, которые передаются на эту страницу

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
