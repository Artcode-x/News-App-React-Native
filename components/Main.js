import React, { useState } from "react"
import { Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { gStyle } from "../styles/styles"
import { AntDesign } from "@expo/vector-icons"
import Form from "./Form"

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool",
      key: "1",
      img: "https://habrastorage.org/getpro/habr/upload_files/dac/c6c/3fa/dacc6c3facf61f5fc7f8015d3da7a5f8.jpg",
    },

    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool",
      key: "2",
      img: "https://pic.rutubelist.ru/video/c6/22/c622b7b2da40649eae281ca285e3b14b.jpg",
    },

    {
      name: "Facebook",
      Facebook: "Google!!!",
      full: "Google is cool",
      key: "3",
      img: "https://static.life.ru/posts/2016/12/948780/47550d041a46b5310f24a3359d5e637b.jpg",
    },
  ])

  const [modalWindow, setModalWindow] = useState(false)

  const addArticle = (article) => {
    article.key = Math.random().toString()
    setNews((list) => {
      console.log(list)
      return [article, ...list]
    })

    setModalWindow(false)
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <AntDesign
            name="closecircle"
            size={24}
            color="black"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} setModalWindow={setModalWindow} />
        </View>
      </Modal>
      <AntDesign
        name="pluscircle"
        size={24}
        color="orange"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("FullInfo", item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-Variable",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-italic",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    height: 200,
    width: "100%",
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
    marginBottom: 15,
  },
})
