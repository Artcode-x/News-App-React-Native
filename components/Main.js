import React, { useState } from "react"
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { gStyle } from "../styles/styles"

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool",
    },

    { name: "Apple", anons: "Apple!!!", full: "Apple is cool" },

    { name: "Facebook", Facebook: "Google!!!", full: "Google is cool" },
  ])

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
      {/* <Button title="Открыть страницу" onPress={loadScene} /> */}
      {/* в renderItem - перебираем каждый эл-т как параметр item, и создаем ф-ию для обработки всего этого */}
      <FlatList
        data={news}
        renderItem={({ item }) => (
          // item  - передаем ту статью на которую нажали
          <TouchableOpacity onPress={() => navigation.navigate("FullInfo", item)}>
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

// const styles = StyleSheet.create({})
