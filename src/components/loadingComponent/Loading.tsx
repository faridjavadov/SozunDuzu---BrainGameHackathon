import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={{ backgroundColor: '#146EF3', justifyContent: 'center', alignItems: 'center', flex: 1,width:'100%',
    height:'100%' }}>

            <ActivityIndicator size="large" color="#FFFFFF" />

        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loadingText: {
        fontSize: 20,
        fontWeight: '600'
    },
})