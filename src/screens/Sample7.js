import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const Sample7 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.floatingContent}>
                <View style={styles.infoContainer}>
                    <View style={styles.successMarkContainer}>
                        <MaterialIcons name='done' color='#fff' size={36} />
                    </View>
                    <Text style={styles.infoText}>Registration completed!</Text>
                </View>
                <TouchableOpacity
                    style={styles.continueButton}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient style={styles.header}
                colors={['#59acf8', '#5db9fc']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Ionicons name='arrow-back' color='#fff' size={24} />
                </TouchableOpacity>
            </LinearGradient>
            <View style={styles.footer}>
                <View style={styles.loginRow}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    header: {
        height: Dimensions.get('window').height / 1.85,
        padding: 15
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginRow: {
        flexDirection: 'row',
        marginBottom: 30
    },
    loginButtonText: {
        color: '#369bf7',
        textDecorationLine: 'underline',
        marginLeft: 10
    },
    floatingContent: {
        position: 'absolute',
        top: Dimensions.get('window').height / 1.85 - 140,
        left: 0,
        width: '100%',
        zIndex: 11
    },
    infoContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        elevation: 12,
        borderRadius: 10
    },
    successMarkContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#6bc25a',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButton: {
        backgroundColor: '#3699f7',
        padding: 15,
        elevation: 12,
        marginTop: 30,
        marginHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButtonText: {
        color: '#fff',
        fontFamily: 'sans-serif-medium'
    },
    infoText: {
        textTransform: 'uppercase',
        fontSize: 13,
        fontFamily: 'sans-serif-medium'
    }
})

export default Sample7