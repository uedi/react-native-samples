import React from 'react'
import { View, StyleSheet,
    Dimensions, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Sample4 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.header}>
                    <Text style={styles.topic}>My Wallet</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Menu')}
                    >
                        <Ionicons name='close' color='#aeb8c6' size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.balanceLabel}>Balance</Text>
                <View style={styles.balanceRow}>
                    <Text style={styles.balance}>$7,340</Text>
                    <Text style={styles.change}>+ $244,99 Today</Text>
                </View>
                <View style={{ height: 30 }} />
            </View>
            <View style={styles.midContent}>

            </View>
            <View style={styles.lowerContent}>
                <TouchableOpacity
                    style={styles.exchangeButton}
                >   
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1f5'
    },
    upperContent: {
        padding: 20,
        backgroundColor: '#092853',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    topic: {
        textTransform: 'uppercase',
        color: '#aeb8c6'
    },
    balanceLabel: {
        marginTop: 30,
        color: '#aeb8c6'
    },
    balanceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    balance: {
        fontSize: 24,
        color: '#fff'
    },
    change: {
        color: '#aeb8c6'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    midContent: {
        flex: 1
    },
    lowerContent: {
        position: 'relative',
        height: 80,
        backgroundColor: '#092853',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    exchangeButton: {
        position: 'absolute',
        left: Dimensions.get('window').width / 2 - 30,
        top: -12,
        zIndex: 10,
        borderWidth: 4,
        borderColor: '#fff',
        borderRadius: 12,
        width: 60,
        height: 60,
        backgroundColor: '#2ca4ff'
    }
})

export default Sample4