import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const LevelContainer = (props: any) => {

  
  let imageComponent = null
  let starsComponent = null
  let unlockComponent = null
  let color = '#F3F3F3'
  switch (props.item.stars) {
    case 0:

      starsComponent = <Image style={styles.starImage} source={require('../../assets/logos/0stars.png')} />

      break;

    case 1:

    starsComponent = <Image style={styles.starImage} source={require('../../assets/logos/1stars.png')} />

      break;

    case 2:

    starsComponent = <Image style={styles.starImage} source={require('../../assets/logos/2stars.png')} />

      break;

    case 3:

    starsComponent = <Image style={styles.starImage} source={require('../../assets/logos/3stars.png')} />

      break;

    default:
      break;
  }
  
  if (props.item.isUnlocked) {
    unlockComponent =
      <TouchableOpacity onPress={() => props.navigation.navigate("GameScreen", props.item)} style={[styles.boxContainer, { backgroundColor: props.item.isUnlocked ? '#FFFFFF' : '#C9C9C9' }]}>

        
        <View style={styles.textContainer}>
          <Text style={styles.levelText}>{props.item.name}</Text>
          {starsComponent}
        </View>

      </TouchableOpacity>
  }
  else {

    unlockComponent =
      <View  style={[styles.boxContainer, { backgroundColor: props.item.isUnlocked ? '#FFFFFF' : '#C9C9C9' }]}>

        <View style={styles.imageContainer}>

          {imageComponent}

        </View>
        <Image style={styles.lockImage} source={require('../../assets/logos/locked.png')} />

      </View>


  }
  return (
    <View>

      {unlockComponent}

    </View>

  )
}

export default LevelContainer

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth / 3,
    height: windowHeight / 8.5,
    alignSelf: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  boxContainer: {
    flexDirection: 'row',
    width: windowWidth / 1.4,
    height: windowHeight / 8,
    paddingHorizontal:windowWidth/16,
    borderWidth: 3,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#17242C',
    justifyContent:'center',
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: 'space-evenly'
  },
  levelText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color:'#146EF3'

  },
  starImage: {
    width: windowWidth / 3.5,
    height: windowHeight / 24
  },
  lockImage: {
    width: windowWidth / 1.4,
    height: windowHeight / 10,
    alignSelf: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom: windowHeight / 50,
    right: 0.006

  },
  level: {
    color: '#17242C',
    fontSize: 20
  },
})