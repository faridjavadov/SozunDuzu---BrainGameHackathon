import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as NavigationBar from "expo-navigation-bar";
import HomeScreen from '../../screens/home/HomeScreen';
import GameModesScreen from '../../screens/home/GameModesScreen';
import Mode1Stack from './Mode1Stack';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import MarketScreen from '../../screens/market/MarketScreen';
import Mode2Stack from './Mode2Stack';
import Mode3Stack from './Mode3Stack';

NavigationBar.setPositionAsync("absolute");
NavigationBar.setBackgroundColorAsync("#ffffff01");
NavigationBar.setVisibilityAsync('hidden')



const Stack = createNativeStackNavigator()

const HomeStack = () => {
  const hideNavigationBarContinuously = () => {

    setTimeout(() => {
      NavigationBar.setVisibilityAsync('hidden');

      hideNavigationBarContinuously();
    }, 6000);
  };

  useEffect(() => {
    hideNavigationBarContinuously();

    return () => {
      clearTimeout(6000);
    };
  }, []);
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='GameModesScreen' component={GameModesScreen} />
      <Stack.Screen name='Mode1Stack' component={Mode1Stack} />
      <Stack.Screen name='Mode2Stack' component={Mode2Stack} />
      <Stack.Screen name='Mode3Stack' component={Mode3Stack} />
      <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
      <Stack.Screen name='MarketScreen' component={MarketScreen} />



    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})
