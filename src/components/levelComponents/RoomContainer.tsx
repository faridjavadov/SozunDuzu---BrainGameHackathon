import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store/Store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const RoomContainer = (props: any) => {


  const { money } = useSelector((state: StateType) => state.MoneySlicer)
  const [price, setprice] = useState(20)
  useEffect(() => {
    if (props.item.name == 'Otaq') {
      setprice(20)
    }
    else if (props.item.name == 'VİQ Otaq') {
      setprice(50)
    }
    else {
      setprice(100)
    }
  }, [])


  let imageComponent = null
  let unlockComponent = null

  const handleNavigate = () => {
    console.log(money);
    console.log(price);
    
    
    if (money >= price) {
      props.navigation.navigate("WheelGameScreen", props.item)

    }
  }


  if (props.item.isUnlocked) {
    unlockComponent =
      <TouchableOpacity onPress={handleNavigate} style={[styles.boxContainer, { backgroundColor: props.item.isUnlocked ? '#FFFFFF' : '#C9C9C9' }]}>


        <View style={styles.textContainer}>
          <Text style={styles.levelText}>{props.item.name}</Text>
          <View style={styles.moneyContainer}>

            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/logos/coin_logo.png')}>

              <Text style={styles.moneyText}>{props.item.coin}</Text>

            </ImageBackground>


          </View>
        </View>

      </TouchableOpacity>
  }
  else {

    unlockComponent =
      <View style={[styles.boxContainer, { backgroundColor: props.item.isUnlocked ? '#FFFFFF' : '#C9C9C9' }]}>

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

export default RoomContainer

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
    paddingHorizontal: windowWidth / 16,
    borderWidth: 3,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#17242C',
    justifyContent: 'center',
    borderRadius: 8,
  },
  backgroundImage: {
    flex: 1,
    height: "100%", width: "100%"
  },
  moneyText: {
    color: '#FFFFFF',
    fontSize: 26,
    textAlign: 'right',
    right: '5%',
    bottom: 2
  },
  moneyContainer: {
    width: 80,
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row'
  },
  textContainer: {
    justifyContent: 'space-evenly'
  },
  levelText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#146EF3'

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