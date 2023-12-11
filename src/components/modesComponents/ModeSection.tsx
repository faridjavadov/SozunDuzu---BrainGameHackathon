import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const ModeSection = (props: any) => {


    let imageURI = null
    switch (props.name) {
        case 'Gizli söz':
            imageURI = <Image style={styles.image} source={require('../../assets/backgrounds/Mode1Background.png')} />

            break;
        case 'Çarxıfələk':
            imageURI = <Image style={styles.image} source={require('../../assets/backgrounds/Mode2Background.png')} />

            break;
        case 'Çox Oyunçulu':
            imageURI = <Image style={styles.image} source={require('../../assets/backgrounds/Mode3Background.png')} />

            break;

        default:
            break;
    }

    const handleNavigation = () => {
        if (props.name == 'Gizli söz') {
            props.navigation.navigate('Mode1Stack')
        }
        else if (props.name == 'Çarxıfələk') {
            props.navigation.navigate('Mode2Stack')
        }
        else if (props.name == "Çox Oyunçulu") {
            props.navigation.navigate("Mode3Stack")
        }
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleNavigation}>

                <View style={styles.imageContainer}>

                    {imageURI}

                </View>

            </TouchableOpacity>


            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

export default ModeSection

const styles = StyleSheet.create({
    container: {
        gap: 5,
        alignItems: 'center'
    },
    imageContainer: {
        width: windowWidth / 1.28,
        height: windowHeight / 4.3,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'

    },
    image: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontSize: 26,
        color: '#FFFFFF',
        marginBottom: windowHeight / 30,
        fontWeight: '700'
    },


})