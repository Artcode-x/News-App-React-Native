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
        <Stack.Screen name="Main" component={Main} options={{ title: "Главная" }} />
        <Stack.Screen name="FullInfo" component={FullInfo} options={{ title: "Статья" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
