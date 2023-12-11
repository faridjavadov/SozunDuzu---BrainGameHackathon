import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import Back from '../../components/icons/Back'

const WheelGameScreen = ({navigation}:any) => {
    return (
        <View style={{
            backgroundColor: '#146EF3', justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%',
            height: '100%'
        }}>

            <TouchableOpacity style={{ position: 'absolute', left: '3%', top: '12%' }} onPress={() => navigation.goBack()}>
                <Back />
            </TouchableOpacity>

            <Text style={styles.headerText}>Rəqib gözlənilir...</Text>

            <ActivityIndicator size="large" color="#FFFFFF" />

        </View>
    )
}

export default WheelGameScreen

const styles = StyleSheet.create({
    loadingText: {
        fontSize: 20,
        fontWeight: '600'
    },
    headerText: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: '30%'
    },
})