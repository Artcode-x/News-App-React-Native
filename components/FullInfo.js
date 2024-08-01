import React from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function FullInfo({ route }) {
  // route - передается точно также, как и navigation. Передается в автоматическом режиме через Stack navigation
  // через route можем получить все данные, которые передаются на эту страницу

  return (
    <View style={[gStyle.main, styles.header]}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={gStyle.title}>{route.params.anons}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-italic",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#f55151",
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  image: {
    height: 200,
    width: "100%",
  },
})
