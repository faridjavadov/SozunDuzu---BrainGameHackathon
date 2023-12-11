import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, BackHandler, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import LevelContainer from '../../components/levelComponents/LevelContainer';
import { mode1levels } from '../../data/Mode1Levels';
import Back from '../../components/icons/Back'
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store/Store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Mode1LevelsScreen = ({ navigation }: any) => {


    const { levels } = useSelector((state: StateType) => state.WordLevelSlicers)




    const renderItem = ({ item }: any) => {

        return (
            <LevelContainer navigation={navigation} item={item} />
        )

    }

    return (
        <View style={styles.mainContainer}>

            <StatusBar translucent backgroundColor="transparent" />


            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/backgrounds/ModesBackground.jpg')}>

            <View style={styles.container}>

                <TouchableOpacity style={{ position: 'absolute', marginTop: '2%' }} onPress={() => navigation.goBack()} >
                    <Back />
                </TouchableOpacity>

                <Text style={styles.headerText}>Səviyyələr</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={levels}
                    ItemSeparatorComponent={() => { return (<View style={{ height: 20 }} />) }}
                    renderItem={renderItem}
                />
            </View>

            </ImageBackground>


        </View>
    )
}

export default Mode1LevelsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        marginTop: windowHeight / 10,
        marginHorizontal: '5%',

        marginBottom: windowHeight / 8,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        height: "100%", width: "100%"
    },

    headerText: {
        fontSize: 36,
        fontWeight: '700',
        color: '#FFFFFF',
        alignSelf: 'center',
        marginBottom: '6%'
    },
})