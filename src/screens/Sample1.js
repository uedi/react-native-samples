import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const Sample1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperBack}>
                <View style={styles.upperFront}>

                </View>
            </View>
            <View style={styles.lowerBack}>
                <View style={styles.lowerFront}>
                    <View style={styles.mainTextContainer}>
                        <Text style={styles.mainText}>Let's connect</Text>
                        <Text style={styles.mainText}>with each other</Text>
                    </View>
                    <Text style={styles.infoText}>Placeholder for some infotext that is displayed in the middle between text and button</Text>
                    <TouchableNativeFeedback>
                        <View style={styles.mainButton}>
                            <Text style={styles.mainButtonText}>Get started</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00'
    },
    upperBack: {
        flex: 1,
        backgroundColor: '#181D3D'
    },
    upperFront: {
        backgroundColor: '#fff',
        borderBottomEndRadius: 100,
        zIndex: 2,
        flex: 1,
    },
    lowerBack: {
        flex: 1,
        backgroundColor: '#fff'
    },
    lowerFront: {
        backgroundColor: '#181D3D',
        borderTopLeftRadius: 100,
        zIndex: 2,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    mainTextContainer: {
        marginTop: 40
    },
    mainText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 24,
    },
    mainButton: {
        backgroundColor: '#F65364',
        height: 50,
        marginBottom: 40,
        width: 200,
        alignSelf: 'center',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },
    infoText: {
        color: '#575A72',
        fontSize: 14,
        alignSelf: 'center',
        marginHorizontal: 50,
        textAlign: 'center'
    }
})

export default Sample1