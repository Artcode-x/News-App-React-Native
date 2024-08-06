import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { gStyle } from "../styles/styles"
import { Formik } from "formik"

// https://docs.expo.dev/versions/latest/sdk/imagepicker/
import * as ImagePicker from "expo-image-picker"

export default function Form({ addArticle, setModalWindow }) {
  const [photos, setPhotos] = useState([])
  const selectImage = async (props) => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaType: "mixed", selectionLimit: 1 })

    if (result.assets && result.assets.length > 0) {
      const { uri } = result.assets[0]
      setPhotos([{ uri }])

      // Устанавливаем выбранное изображение в значения формы
      props.setFieldValue("img", uri)
      // сохраняем фото что были и добавляем новые
      // setPhotos((prevState) => [...prevState, { uri: result.assets[0]?.uri }])
    }
  }

  return (
    <View style={[gStyle.main, styles.form]}>
      <Formik
        initialValues={{
          name: "",
          anons: "",
          full: "",
          img: "",
        }}
        onSubmit={(values) => {
          setModalWindow(false), addArticle(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите статью"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Ссылка на выбранный файл"
              onChangeText={props.handleChange("img")}
              editable={false}
            />
            <Button title="Выбрать файл" onPress={() => selectImage(props)} />
            <View style={styles.button}>
              <Button title="Добавить" onPress={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {},
  input: {
    marginBottom: 10,
    backgroundColor: "orange",
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    borderColor: "silver",
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
  },
})
