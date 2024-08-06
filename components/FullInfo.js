import React from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function FullInfo({ route }) {
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
