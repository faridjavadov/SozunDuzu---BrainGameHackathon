import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import MenuSection from '../../components/homeComponents/MenuSection'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const HomeScreen = ({ navigation, route }: any) => {
   

    
    
    return (
        
        <View style={styles.container}>
             <StatusBar translucent backgroundColor="transparent" />

            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/backgrounds/HomeBackground.jpg')}>

                <View style={styles.menuContainer}>

                    <Image source={require('../../assets/logos/GameLogo.png')} style={{ width: windowWidth / 1.2, height: windowHeight / 8,marginBottom:'30%' }} />

                    <TouchableOpacity onPress={() => navigation.navigate("GameModesScreen")} style={styles.imageContainer}>

                        {/* <Image source={require('../../assets/logo/home/capybara_logo.png')} style={{ width: windowWidth / 2, height: windowHeight / 3.75, resizeMode: 'contain' }} /> */}

                    </TouchableOpacity>
                    <MenuSection navigation={navigation} name={'OYNA'} />
                    <MenuSection navigation={navigation} name={'SEÇİMLƏR'} />
                    <MenuSection navigation={navigation} name={'MƏLUMAT'} />
                </View>

                <View style={styles.optionsMenu}>


                    <TouchableOpacity style={{ borderWidth: 1, borderTopRightRadius: 20}}>

                        <Image style={{ borderTopRightRadius: 20, height: windowHeight / 12, width: windowWidth / 3.2 }} source={require('../../assets/logos/cart_logo.png')} />

                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderWidth: 1, borderTopLeftRadius: 20}}>

                        <Image style={{ borderTopLeftRadius: 20, height: windowHeight / 12, width: windowWidth / 3.2 }} source={require('../../assets/logos/trophy_logo.png')} />

                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        height: "100%", 
        width: "100%"
    },

    imageContainer: {
        zIndex: 2,
    },
    menuContainer: {
        alignItems: 'center',
        gap: 20,
    },

    
    optionsMenu: {
        flexDirection: 'row',
        height: windowHeight / 10,
        width: windowWidth / 1,
        justifyContent: 'space-between',
        top: windowHeight / 4.92,
        alignItems: 'center',
    },

})