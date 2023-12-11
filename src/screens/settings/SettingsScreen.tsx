import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../redux/store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuSection from '../../components/settingsComponent/MenuSection';
import Back from '../../components/icons/Back'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SettingsScreen = ({navigation}:any) => {


    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={{ flex: 1, backgroundColor: '#146EF3' }}>
            <View style={styles.container}>

                <TouchableOpacity style={{ position: 'absolute', marginTop: '12%' }} onPress={() => navigation.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText}>Seçimlər</Text>

                <View style={[styles.settingsMenu]}>

                    <View style={styles.generalMenu}>

                        <Text style={styles.generalHeaderText}>Əsas</Text>

                        <MenuSection name={'İstifadəçi Məlumatları'} />
                        <MenuSection name={'Görünüş'} />
                        <MenuSection name={'Dil'} />
                        <MenuSection name={'Bildirişlər'} />

                    </View>

                    <View style={styles.generalMenu}>

                        <Text style={styles.generalHeaderText}>Dəstək</Text>

                        <MenuSection name={'Bildir'} />
                        <MenuSection name={'FAQ'} />


                    </View>

                    <View style={styles.generalMenu}>

                        <Text style={styles.generalHeaderText}>Əlavə</Text>

                        <MenuSection name={'Bizi dəyərləndir'} />
                        <MenuSection name={'Aplikasiyanı paylaş!'} />


                    </View>

                    <View style={{ height: windowHeight / 16 }} />

                </View>
            </View>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        marginTop: '12%',
        flex: 1,
    },
    scrollContainer: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: '#146EF3'
    },
    headerText: {
        marginTop: '10%',
        marginBottom: '5%',
        fontSize: 32,
        alignSelf:'center',
        fontWeight: '700',
        color: 'white',
        paddingHorizontal: '3%'
    },
    settingsMenu: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: '3%',


    },
    generalMenu: {
        marginTop: '5%',
        gap: 10

    },
    menuSection: {
        gap: 5
    },
    seperator: {

    },
    generalHeaderText: {
        fontSize: 18,
        padding: '2%',
        fontWeight: '600'
    },
    generalText: {
        fontSize: 18,
        fontWeight: '500'
    },
    buttonContainer: {
        borderWidth: 0.8,
        width: windowWidth / 1.22,
        height: windowHeight / 16,
        marginTop: '5%',
        borderRadius: 4,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4%'
    },

})