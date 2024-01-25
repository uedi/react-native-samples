import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Sample5 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeContainer}
                onPress={() => navigation.navigate('Menu')}
            >
                <Ionicons name='arrow-back' color='#fff' size={28} />
            </TouchableOpacity>
            <View style={styles.column}>
                <View style={styles.upperLeft}>
                    <View style={{ height: 75 }} />
                    <Text style={styles.letter}>F</Text>
                    <Text style={styles.letter}>T</Text>
                    <Text style={styles.letter}>R</Text>
                </View>
                <View style={styles.lowerLeft}>
                    <View style={styles.line} />
                    <Text style={styles.name}>{`DJ Funky\nThe Electro Jazz\nQuartet Bass Band`}</Text>
                    <Text style={styles.link}>www.futurefest.com</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.column}>
                <View style={styles.upperRight}>
                    <View style={{ height: 125 }} />
                    <Text style={styles.letter}>U</Text>
                    <Text style={styles.letter}>U</Text>
                    <Text style={styles.letter}>E</Text>
                </View>
                <View style={styles.lowerRight}>
                    <Text style={styles.day}>29</Text>
                    <Text style={styles.month}>Jun</Text>
                    <View style={styles.longerLine} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#210141',
        flexDirection: 'row'
    },
    closeContainer: {
        marginLeft: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    column: {
        flex: 1
    },
    divider: {
        alignSelf: 'stretch',
        width: 2,
        backgroundColor: '#f7d9ae'
    },
    upperLeft: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 10
    },
    upperRight: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    lowerLeft: {
        height: 150,
        paddingLeft: 20,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    lowerRight: {
        height: 150,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 30,
        paddingRight: 20
    },
    letter: {
        color: '#fff',
        fontSize: 72,
        fontWeight: 'bold'
    },
    line: {
        height: 2,
        backgroundColor: '#fff',
        width: 25,
        marginBottom: 10
    },
    name: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 22
    },
    link: {
        color: '#fff',
        textTransform: 'uppercase',
        marginTop: 10,
        fontSize: 10,
        letterSpacing: 0.5
    },
    day: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
    },
    month: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 26,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    longerLine: {
        height: 2,
        backgroundColor: '#fff',
        width: 50,
        marginTop: 10
    }
})

export default Sample5