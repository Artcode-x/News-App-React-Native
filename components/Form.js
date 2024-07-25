import React from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { gStyle } from "../styles/styles"
import { Formik } from "formik"

export default function Form({ addArticle, setModalWindow }) {
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
              // этот атрибут позволяет вписывать несколько строчек текста
              multiline
              placeholder="Введите статью"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Добавьте фото"
              onChangeText={props.handleChange("img")}
            />

            <Button title="Добавить" onPress={props.handleSubmit} />
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
})
