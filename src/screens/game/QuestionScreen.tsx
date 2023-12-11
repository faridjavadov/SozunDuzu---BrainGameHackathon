import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { setRevealed } from '../../redux/slicers/WordSlicer';
import { questions } from '../../data/Mode1Questions';
import AnswerContainer from '../../components/gameComponents/AnswerContainer';
import Back from '../../components/icons/Back'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const QuestionScreen = ({ route, navigation }: any) => {

    const item = route.params; // Extract selectedIndex from route.params
    const dispatch = useDispatch<AppDispatch>();
    const [randomINT, setrandomINT] = useState(0)
    const {money} = useSelector((state:StateType)=>state.MoneySlicer)

    const { stars } = useSelector((state: StateType) => state.WordLevelSlicers)
  
    let starsComponent = null

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

    function getRandomInt(min: any, max: any) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        setrandomINT(getRandomInt(0, 58))
    }, [])


    const revealSymbol = () => {
        navigation.goBack();
        dispatch(setRevealed(item.id))
    };

    const renderItem = ({ item }: any) => {

        return (
            <View>
                <AnswerContainer revealSymbol={revealSymbol} item={item} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/backgrounds/GameBackground.jpg')}>

                <TouchableOpacity style={{ position: 'absolute', left: '3%', top: '8%' }} onPress={() => navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <View style={styles.moneyContainer}>

                    <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/logos/coin_logo.png')}>

                        <Text style={styles.moneyText}>{money}</Text>
                    </ImageBackground>


                </View>

                <Text style={styles.headerText}>{questions[randomINT].question}</Text>

                <View style={styles.answersContainer}>
                    <View>
                        <FlatList
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                            ItemSeparatorComponent={() => { return (<View style={{ height: 20 }} />) }}
                            data={questions[randomINT].answers}
                            renderItem={renderItem} />
                    </View>

                </View>
                {starsComponent}
            </ImageBackground>

        </View>
    );
};

export default QuestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answersContainer: {
        width: windowWidth / 1.1,
        height: windowHeight / 2,
        justifyContent: 'center',

    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%", width: "100%"
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: '5%',
        color: "#FFFFFF"
    },
    moneyText: {
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: 'right',
        bottom:2,
        left:'20%'
      },
      moneyContainer: {
        width: 80,
        borderRadius: 10,
        position:'absolute',
        right:'5%',
        top:'8%',
        height: 35,
        alignItems: 'center',
        flexDirection: 'row'
      },
      starImage: {
        width: windowWidth / 2,
        height: windowHeight / 12,
        alignSelf:'center',
      },
    
});
