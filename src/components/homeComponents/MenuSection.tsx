import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MenuSection = (props: any) => {

  const handleNavigate = () => {
    switch (props.name) {
      case "OYNA":
        props.navigation.navigate("GameModesScreen")
        break;
      case "SEÇİMLƏR":
        props.navigation.navigate("SettingsScreen")

        break;
      case "MƏLUMAT":

        break;
      default:
        break;
    }
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.button}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default MenuSection

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#146EF3',
    width: windowWidth / 2,
    height: windowHeight / 12,
    borderRadius: 12,
    elevation: 20,
    borderColor: '#FFFFFF'

  },
  text: {
    color: 'white',
    fontFamily: 'Mina-Bold',
    fontSize: 36,
    fontWeight: '600'
  },
})