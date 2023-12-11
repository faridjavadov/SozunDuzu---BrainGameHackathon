import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Mode1LevelsScreen from '../../screens/levels/Mode1LevelsScreen'
import GameScreen from '../../screens/game/GameScreen'
import QuestionScreen from '../../screens/game/QuestionScreen'
import Mode2LevelsScreen from '../../screens/levels/Mode2LevelsScreen'
import WheelGameScreen from '../../screens/game/WheelGameScreen'



const Stack = createNativeStackNavigator()

const Mode2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        animation:'slide_from_right'
    }}>

        <Stack.Screen name='Mode2LevelsScreen' component={Mode2LevelsScreen} />
        <Stack.Screen name='GameScreen' component={GameScreen}/>
        <Stack.Screen name= "WheelGameScreen" component={WheelGameScreen}/>

        <Stack.Screen name='QuestionScreen' component={QuestionScreen}/>

    </Stack.Navigator>
  )
}

export default Mode2Stack

const styles = StyleSheet.create({})
