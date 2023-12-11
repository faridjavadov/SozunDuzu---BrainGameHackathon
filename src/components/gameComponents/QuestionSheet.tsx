import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { setWord } from '../../redux/slicers/WordSlicer';
import { words } from '../../data/Mode1Words';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const QuestionSheet = (props: any) => {


    const splittedWord: any = []

    const dispatch = useDispatch<AppDispatch>();

    const { word } = useSelector((state: StateType) => state.WordSlicer)
    const { data } = useSelector((state: StateType) => state.WordLevelSlicers)
    const [showTextField, setShowTextField] = useState(false);
    const [guess, setGuess] = useState('')
    const [flag, setflag] = useState(true)

    const handleGuessClick = () => {

        setShowTextField(!showTextField); // Toggles the visibility of the text field
    }
    const submitGuessClick = () => {
        const guessedWord = guess.toUpperCase();
        const actualWord = props.item.word.toUpperCase();

        if (guessedWord === actualWord || guessedWord.replace(/İ/g, 'I') === actualWord.replace(/İ/g, 'I')) {
            if (flag) {
                props.nextQuestion();
                setflag(false)

            }
        }
    }


    const assignArray = async () => {

        props.data[props.questionIndex].word.split('').forEach((letter: any, index: any) => {
            splittedWord.push({
                letter: letter,
                id: index,
                isRevealed: false,
            });
        });

        await dispatch(setWord(splittedWord))

    }

    useFocusEffect(
        React.useCallback(() => {
            // This callback will be triggered when the screen gains focus
            // Perform any actions needed to update data or trigger re-renders here
            console.log('Screen is focused again'); // For debugging purposes

            // You might want to dispatch an action to update the QuestionSheet here
            // Example:
            // dispatch(someActionToUpdateQuestionSheet());
        }, [])
    );
    useEffect(() => {
        assignArray()
    }, [props.questionIndex])



    const handleItemPress = (index: number) => {
        // Navigate to the "QuestionScreen" and pass the index
        if (!word[index].isRevealed) {
            props.navigation.navigate('QuestionScreen', word[index]);

        }

    };

    // ... (other imports and code)

    const renderItems = () => {
        const itemsPerRow = 6; // Define the number of items per row
        const rows = [];

        for (let i = 0; i < word.length; i += itemsPerRow) {
            const rowItems = word.slice(i, i + itemsPerRow).map((item: any, indexWithinRow: any) => {
                const index = i + indexWithinRow; // Calculate the overall index
                return (
                    <View key={index} style={styles.backgroundImage}>
                        <ImageBackground resizeMode="cover" source={require('../../assets/backgrounds/BoxBackground.png')}>
                            <TouchableOpacity
                                onPress={() => handleItemPress(index)}
                                style={{
                                    width: 50,
                                    height: 70,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                key={index} // Use the overall index as the key
                            >
                                {item.isRevealed ? <Text style={styles.item}>{item.letter}</Text> : <Text></Text>}
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                );
            });

            rows.push(
                <View key={i} style={styles.horizontalList}>
                    {rowItems}
                </View>
            );
        }

        return rows;
    };





    return (
        <View style={styles.container}>

            <Text style={styles.descText}>{props.item.description}</Text>

            <View style={styles.horizontalList}>{renderItems()}</View>

            {showTextField && (
                <View>
                    {/* This text input will be shown/hidden based on showTextField state */}
                    <TextInput
                        onChangeText={setGuess}
                        style={styles.input}
                        placeholder="Təxmininizi yazın"
                    />
                </View>
            )}

            <View style={{ flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity onPress={handleGuessClick}>
                    <Text style={styles.buttonText}>Təxmin et</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={submitGuessClick}>
                    <Text style={styles.buttonText}>Təsdiqlə</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuestionSheet;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight / 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    horizontalList: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5%',
        gap: 10
    },
    item: {
        margin: 5,
        fontSize: 22
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        backgroundColor: '#FFFFFF',
        width: windowWidth / 1.5,
        borderRadius: 8
    },
    descText: {
        marginHorizontal: '5%',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 24
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        borderWidth: 1,
        padding: '4%',
        width: windowWidth / 3,
        borderRadius: 12,
        backgroundColor: '#FFFFFF'

    },
    backgroundImage: {

    },
});
