import React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const MenuItem = ({ title, onPress }) => {
    return (
        <TouchableNativeFeedback
            onPress={() => onPress()}
            onLongPress={() => onPress()}
            delayPressIn={0}
            delayPressOut={0}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.buttons}
                overScrollMode='always'
            >
                <MenuItem title='UI sample 1' onPress={() => { navigation.navigate('uisample1')}} />
                <MenuItem title='UI sample 2' onPress={() => { navigation.navigate('uisample2')}} />
                <MenuItem title='UI sample 3' onPress={() => { navigation.navigate('uisample3')}} />
                <MenuItem title='UI sample 4' onPress={() => { navigation.navigate('uisample4')}} />
                <MenuItem title='UI sample 5' onPress={() => { navigation.navigate('uisample5')}} />
                <MenuItem title='UI sample 6' onPress={() => { navigation.navigate('uisample6')}} />
                <MenuItem title='UI sample 7' onPress={() => { navigation.navigate('uisample7')}} />
                <MenuItem title='UI sample 8' onPress={() => { navigation.navigate('uisample8')}} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        marginTop: 40,
        width: '100%',
    },
    button: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#333333',
        alignSelf: 'stretch'
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        lineHeight: 20,
        textTransform: 'uppercase',
        letterSpacing: 0.5
    }
})

export default Menu