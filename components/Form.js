import React from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { gStyle } from "../styles/styles"
import { Formik } from "formik"

export default function Form({ addArticle, setModalWindow }) {
  return (
    <View style={[gStyle.main, styles.form]}>
      {/* Formik - быстрый инструмент для получения данных из каждой формы и валидации данных */}
      {/* onSubmit - обработчик события, который срабатывает когда отправляются данные из формы */}
      {/* values - данные что получаем от пользователя из всех полей, что находятся внутри самой формы */}
      {/* в атрибуте initialValues -  указываем какие параметры, какие зн-ия мы будем получать из самой формы */}
      <Formik
        //   указываем те зн-ия, которые будем получать из формы:
        initialValues={{
          name: "",
          anons: "",
          full: "",
          img: "",
        }}
        onSubmit={(values) => {
          setModalWindow(false),
            addArticle(
              values
              //  action
            )
          // action.resetForm()
        }}
      >
        {/* нужно описать все текстовые поля с которых будем получать данные: */}
        {(props) => (
          //   тут указываем что будем отображать юзеру
          <View>
            {/* таким образом все что будет вписываться в это поле, будет устанавливаться для св-в initialValues выше. */}
            {/* onChangeText - будет срабатывать каждый раз, когда вводим что то внутрь текстововго поля */}
            <TextInput
              value={props.values.name}
              placeholder="Введите название"
              // тут мы говорим в какое св-во мы подставляем зн-ие из текстового поля, каждый раз когда вписываем что то новое в это текстовое поле, мы это зн-ие будем добавлять в само св-во name, которое принадлежит форме
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

            {/* handleSubmit - существует в самом обьекте formik */}
            {/* при нажатии на кнопку будем пол-ть данные из всех полей и выв-ть в консоль */}
            <Button title="Добавить" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    // backgroundColor: "gray",
    // borderRadius: 20,
    // marginTop: 20,
  },
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
