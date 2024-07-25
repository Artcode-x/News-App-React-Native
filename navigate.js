import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import FullInfo from "./components/FullInfo"
import Main from "./components/Main"

const Stack = createStackNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* с пом-ю headerStyle - можем уст-ть разл-ие css св-ва . headerTitleStyle - указываем стили применимые к текстовым надписям (Главная)*/}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Главная",
            headerStyle: { backgroundColor: "#eb5d3d", height: 100 },
            headerTitleStyle: { fontWeight: "400" },
          }}
        />
        <Stack.Screen name="FullInfo" component={FullInfo} options={{ title: "Статья" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
