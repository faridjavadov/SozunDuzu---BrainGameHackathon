import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, FlatList, BackHandler, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import Back from '../../components/icons/Back'
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store/Store';
import { mode2levels } from '../../data/Mode2Levels';
import RoomContainer from '../../components/levelComponents/RoomContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Mode2LevelsScreen = ({ navigation }: any) => {


    const { levels } = useSelector((state: StateType) => state.WordLevelSlicers)

    const {money} = useSelector((state:StateType)=>state.MoneySlicer)


    const renderItem = ({ item }: any) => {

        return (
            <RoomContainer navigation={navigation} item={item} />
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


                    <Text style={styles.headerText}>Otaqlar</Text>
                    <View style={styles.moneyContainer}>

                        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/logos/coin_logo.png')}>

                            <Text style={styles.moneyText}>{money}</Text>

                        </ImageBackground>


                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={mode2levels}
                        ItemSeparatorComponent={() => { return (<View style={{ height: 20 }} />) }}
                        renderItem={renderItem}
                    />
                </View>

            </ImageBackground>


        </View>
    )
}

export default Mode2LevelsScreen

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
        position:'absolute',
        right:'1%',
        top:'2%',
        width: 80,
        borderRadius: 10,
        height: 35,
        alignItems: 'center',
        flexDirection: 'row'
      },

    headerText: {
        fontSize: 36,
        fontWeight: '700',
        color: '#FFFFFF',
        alignSelf: 'center',
        marginBottom: '50%'
    },
})