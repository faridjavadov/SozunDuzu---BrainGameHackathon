import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import ModeSection from '../../components/modesComponents/ModeSection';
import Back from '../../components/icons/Back'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GameModesScreen = ({ navigation, route }: any) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView>

                <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/backgrounds/ModesBackground.jpg')}>

                    <View style={styles.container}>

                        <TouchableOpacity style={{ position: 'absolute', marginTop: '2%' }} onPress={() => navigation.goBack()} >
                            <Back />
                        </TouchableOpacity>

                        <Text style={styles.headerText}>Rejimlər</Text>


                        <ModeSection navigation={navigation} name={'Gizli söz'} />
                        <ModeSection navigation={navigation} name={'Çarxıfələk'} />
                        <ModeSection navigation={navigation} name={'Çox Oyunçulu'} />


                    </View>

                </ImageBackground>
            </ScrollView>

        </View>
    )
}

export default GameModesScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        marginTop: windowHeight / 18,
        marginHorizontal: '5%',
    },
    backgroundImage: {
        flex: 1,
        height: "100%", width: "100%"
    },

    headerText: {
        fontSize: 36,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: '20%',
        alignSelf: 'center'
    },
})