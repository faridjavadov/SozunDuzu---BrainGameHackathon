import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import NextIcon from '../icons/settingsIcon/NextIcon'
import AccountIcon from '../icons/settingsIcon/AccountIcon'
import AppearanceIcon from '../icons/settingsIcon/ApperanceIcon'
import NotificationsIcon from '../icons/settingsIcon/NotificationsIcon'
import LanguageIcon from '../icons/settingsIcon/LanguageIcon'


const MenuSection = (props: any) => {
    let iconComponent = null;


    switch (props.name) {
        case 'İstifadəçi Məlumatları':
            iconComponent = <AccountIcon />;
            break;
        case 'Görünüş':
            iconComponent = <AppearanceIcon />;
            break;
        case 'Dil':
            iconComponent = <LanguageIcon />;
            break;
        case 'Bildirişlər':
            iconComponent = <NotificationsIcon />;
            break;
        default:
            break;
    }
    return (
        <TouchableOpacity>
            <View style={styles.menuSection}>

                <View style={{ flexDirection: 'row', gap: 7 }}>
                    {iconComponent}
                    <Text style={[styles.generalText]}>{props.name}</Text>

                </View>

                <View style={{ flexDirection: 'row' }}>

                    <NextIcon />

                </View>





            </View>
            <View style={styles.seperator} />
        </TouchableOpacity>
    )
}

export default MenuSection

const styles = StyleSheet.create({
    menuSection: {
        gap: 20,
        padding: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seperator: {
        width: '100%',
        height: 2,
        backgroundColor: '#F0EFF5',
        marginTop: '3%'
    },

    generalText: {
        fontSize: 14,
        fontWeight: '500'
    },
})