import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Mode1LevelsScreen from '../../screens/levels/Mode1LevelsScreen'
import GameScreen from '../../screens/game/GameScreen'
import QuestionScreen from '../../screens/game/QuestionScreen'



const Stack = createNativeStackNavigator()

const Mode1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        animation:'slide_from_right'
    }}>

        <Stack.Screen name='Mode1LevelsScreen' component={Mode1LevelsScreen} />
        <Stack.Screen name='GameScreen' component={GameScreen}/>
        <Stack.Screen name='QuestionScreen' component={QuestionScreen}/>

    </Stack.Navigator>
  )
}

export default Mode1Stack

const styles = StyleSheet.create({})
