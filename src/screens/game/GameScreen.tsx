import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { words } from '../../data/Mode1Words'
import Back from '../../components/icons/Back'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../../redux/store/Store'
import QuestionSheet from '../../components/gameComponents/QuestionSheet';
import { finishLevel, handleStar, resetStar, setData, unlockNextLevel } from '../../redux/slicers/WordLevelSlicers';
import { setMoney } from '../../redux/slicers/MoneySlicer';
import Loading from '../../components/loadingComponent/Loading';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const GameScreen = ({ route }: any) => {

  const navigation = useNavigation<any>()
  const flatListRef = useRef<FlatList>(null);;
  const level = route.params

  
  let starsComponent = null
  let color = '#F3F3F3'
  
  

  const [questionIndex, setquestionIndex] = useState(0)
  const [ShuffleWords, setShuffleWords] = useState(words.slice((level.id - 1) * 10, level.id * 10))
  const [loading, setloading] = useState(true)

  const dispatch = useDispatch<AppDispatch>();
  const { word } = useSelector((state: StateType) => state.WordSlicer)
  const { stars } = useSelector((state: StateType) => state.WordLevelSlicers)
  const { money } = useSelector((state: StateType) => state.MoneySlicer)


  switch (stars) {
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
  const scrollToIndex = (index: any) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  useEffect(() => {
    AssignData()
    dispatch(resetStar())
    setloading(false)
  }, [])

  const AssignData = async () => {
    await setShuffleWords(shuffleArray(words.slice((level.id - 1) * 10, level.id * 10)))
    console.log('sh', ShuffleWords);

    dispatch(setData(ShuffleWords))

  }


  function shuffleArray(array: any) {
    const shuffled = array.slice(); // Create a copy of the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements at i and j
    }
    return shuffled;
  }

  const nextQuestion = () => {

    if (questionIndex == 9) {

      handleFinish()
      navigation.goBack()
      return
    }
      scrollToIndex(questionIndex + 1)
      setquestionIndex(questionIndex + 1)

  }

  const handleFinish = () => {
    dispatch(unlockNextLevel(level.id + 1))
    dispatch(finishLevel({
      id: level.id,
      stars: stars
    }))
    dispatch(setMoney(stars * 5))

  }
  console.log(level.id);



  const renderItem = ({ item }: any) => {
    return (
      <QuestionSheet data = {ShuffleWords} navigation={navigation} questionIndex={questionIndex} nextQuestion={nextQuestion} item={item} />
    )
  }
  return (
    loading ? <Loading /> :
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/backgrounds/GameBackground.jpg')}>


          <View style={{ flex: 3, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>


            <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
            <Text style={styles.headerText}>{questionIndex + 1}/10</Text>

            <View style={styles.moneyContainer}>

              <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/logos/coin_logo.png')}>

                <Text style={styles.moneyText}>{money}</Text>
              </ImageBackground>


            </View>

          </View>

          <View style={{ flex: 16 }}>

            <FlatList
              ref={flatListRef}
              data={ShuffleWords}
              renderItem={renderItem}
              horizontal
              keyExtractor={(item, index) => item.id.toString()} // Use a unique key
              scrollEnabled={false}
            />

          </View>
          {starsComponent}

        </ImageBackground>
      </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 36,
    color: '#000000',
    fontWeight: '700',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: '5%',
    padding: '1%'
  },
  starImage: {
    width: windowWidth / 2,
    height: windowHeight / 12,
    alignSelf:'center',
    bottom:'8%'
  },
  backgroundImage: {
    flex: 1,
    height: "100%", width: "100%"
  },
  moneyText: {
    color: '#FFFFFF',
    fontSize: 26,
    textAlign: 'right',
    right: '20%',
    bottom: 2
  },
  moneyContainer: {
    width: 80,
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row'
  },

})