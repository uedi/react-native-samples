import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const Sample6 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header}
                colors={['#1dd8ff', '#e1fdff']}
            >
                <View style={styles.headerTop}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Menu')}
                    >
                        <Ionicons name='arrow-back' color='#fff' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    >
                        <MaterialIcons name='more-vert' color='#fff' size={28} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1}} />
                <View style={styles.headerTopicRow}>
                    <LinearGradient style={styles.personContainer}
                        colors={['#354648', '#14252a']}
                        start={{ x: 0, y: 0}}
                        end={{ x: 1, y: 0 }}
                    >
                        <Ionicons name='person-outline' color='#fff' size={24} />
                    </LinearGradient>
                    <Text style={styles.headerTopicText}>Anonymous Lion</Text>
                    <MaterialIcons name='navigate-next' color='#597a81' size={28} />
                </View>
                <Text style={styles.projects}>Projects</Text>
                <View style={styles.headerStatistics}>
                    <Ionicons name='people-outline' color='#597a81' size={24} />
                    <Text style={styles.headerStatisticsText}>No Shared</Text>
                    <Ionicons name='lock-closed-outline' color='#597a81' size={21} />
                    <Text style={styles.headerStatisticsText}>4 Private</Text>
                </View>
            </LinearGradient>
            <View style={styles.line} />
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.addButton}
                >
                    <Entypo name='plus' color='#fff' size={28} />
                </TouchableOpacity>
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Dimensions.get('screen').height / 2.5,
        padding: 15
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line: {
        backgroundColor: '#d9eef1',
        height: 2
    },
    content: {
        flex: 1
    },
    addButton: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0aa7ff',
        width: 60,
        height: 60,
        borderRadius: 60,
        zIndex: 11,
        elevation: 6
    },
    projects: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    headerStatistics: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    headerStatisticsText: {
        marginLeft: 5,
        marginRight: 25,
        color: '#597a81',
        fontSize: 16
    },
    headerTopicRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    headerTopicText: {
        fontWeight: 'bold',
        fontSize: 21,
        marginRight: 20
    },
    personContainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Sample6