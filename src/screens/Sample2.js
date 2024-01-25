import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Sample2 = () => {
    return (
        <LinearGradient
            style={styles.container}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5 }}
            colors={['#35415B', '#26324E']}
        >
            <View style={styles.headerRow}>
                <Text style={styles.headerTextLeft}>my</Text>
                <Text style={styles.headerTextRight}>goals</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.textInputLabel}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    autoCompleteType='email'
                    autoCorrect={false}
                />
                <Text style={[styles.textInputLabel, { marginTop: 20 }]}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    autoCorrect={false}
                />
                <TouchableOpacity>
                    <Text style={styles.centerLabel}>
                        Forgot password
                    </Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
                <LinearGradient style={styles.mainButton}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5 }}
                    colors={['#9AF7E1', '#97ECAB']}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View>
                <Text style={styles.centerLabel}>
                    Don't have an account?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.createAccountLink}>
                        Create an account
                    </Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: 50
    },
    headerTextLeft: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400'
    },
    headerTextRight: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700'
    },
    mainButton: {
        height: 50,
        width: 200,
        alignSelf: 'center',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#3D4962',
        fontWeight: '700',
        fontSize: 16
    },
    formContainer: {
        width: '100%'
    },
    textInput: {
        width: '100%',
        borderBottomColor: '#8B92A1',
        borderBottomWidth: 1,
        padding: 0,
        color: '#fff'
    },
    textInputLabel: {
        color: '#8B92A1'
    },
    centerLabel: {
        marginTop: 20,
        alignSelf: 'center',
        color: '#8B92A1'
    },
    createAccountLink: {
        color: '#fff',
        marginTop: 5,
        marginBottom: 30,
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600'
    }
})

export default Sample2