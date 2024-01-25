import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Sample3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Ionicons name='arrow-back' color='#fff' size={28} />
                </TouchableOpacity>
            </View>
            <View style={styles.lowerContainer}>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signInLink}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mainContent}>
                <Text style={styles.topic}>Create{'\n'}Account</Text>
                <View style={styles.formContainer}>
                    
                </View>
                <View style={styles.mainBottomRow}>
                    <Text style={styles.signUpText}>Sign up</Text>
                    <TouchableOpacity>
                        <View style={styles.signUpButton}>
                            <Ionicons name='arrow-forward' color='#fff' size={36} />
                        </View>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#904F83'
    },
    lowerContainer: {
        flex: 1,
        backgroundColor: '#FEA1A7',
        justifyContent: 'space-between',
        padding: 30
    },
    topic: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '700',
    },
    signInLink: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: 'bold'
    },
    signUpText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
    },
    mainContent: {
        position: 'absolute',
        top: 100,
        left: 30,
        right: 30,
        bottom: 100,
        zIndex: 3,
        justifyContent: 'space-between'
    },
    mainBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signUpButton: {
        width: 90,
        height: 90,
        backgroundColor: '#854A79',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        width: '100%',
        flex: 1,
    },
    textInput: {
        width: '100%',
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    }
})

export default Sample3