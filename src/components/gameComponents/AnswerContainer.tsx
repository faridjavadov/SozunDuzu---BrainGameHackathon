import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { handleStar, resetStar } from '../../redux/slicers/WordLevelSlicers';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AnswerContainer = (props:any) => {


    
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<any>();
    const {stars} = useSelector((state:StateType)=>state.WordLevelSlicers)
    const [color, setcolor] = useState('#FFFFFF')

    const wrongAnswer = ()=>{


        setcolor('#FF0000');
        setTimeout(() => {
            setcolor('#FFFFFF');
        }, 1500);

        dispatch(handleStar(1))
        if(stars <= 1 ){
            navigation.navigate("Mode1LevelsScreen")
            dispatch(resetStar())
        }
    }


  return (
    <TouchableOpacity onPress={props.item.isCorrect?props.revealSymbol:wrongAnswer} style={[styles.container,{backgroundColor:color}]}>
      <Text style={styles.answerText}>{props.item.answer}</Text>
    </TouchableOpacity>
  )
}

export default AnswerContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width:windowWidth/2.5,
        height:windowHeight/12,
        justifyContent:'center',
        alignItems:'center',
        padding:'2%',
        borderRadius:8,
        backgroundColor:"#FFFFFF"
    },
    answerText:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:18
    },
})