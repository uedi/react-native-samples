import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const MontlyItem = ({ color, amount, name, date }) => {
    return (
        <View style={styles.montlyItem}>
            <View style={[styles.imageContainer, { backgroundColor: color }]}>
            </View>
            <View style={styles.nameAndDate}>
                <Text style={styles.transactionName}>{name}</Text>
                <Text style={styles.transactionDate}>{date}</Text>
            </View>
            <Text>{amount}</Text>
        </View>
    )
}

const Sample8 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Menu')}
                    >
                        <Ionicons name='chevron-back' color='#fff' size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} />
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.name}>Jason Smith</Text>
                <Text style={styles.balanceLabel}>Your balance</Text>
                <Text style={styles.balance}>$24,000.89</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.selection}>
                    <View style={styles.transactionsSelect}>
                        <View style={styles.selectIcon}>
                            <Ionicons name='wallet' color='#6559d9' size={16} />
                        </View>
                        <View style={styles.selectionInfo}>
                            <Text style={styles.transactionLabel}>Transactions</Text>
                            <Text style={styles.transactionAmount}>$1400</Text>    
                        </View>
                    </View>
                    <View style={styles.expensesSelect}>
                        <View style={styles.selectIcon}>
                            <FontAwesome name='money' color='#eb6800' size={16} />
                        </View>
                        <View style={styles.selectionInfo}>
                            <Text style={styles.expensesLabel}>Expenses</Text>
                            <Text style={styles.expensesAmount}>$400</Text>    
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.labelRow}>
                        <View style={styles.labelLine} />
                        <Text style={styles.label}>This month</Text>
                        <View style={styles.labelLine} />
                    </View>
                    <MontlyItem
                        color='#a279f9'
                        amount='- $280'
                        name='Caroline Smith'
                        date='October 21, 2019' />
                    <MontlyItem
                        color='#67d388'
                        amount='- $780'
                        name='Grocery Shop'
                        date='October 15, 2019' />
                    <MontlyItem
                        color='#fece52'
                        amount='- $80'
                        name='Car Wash'
                        date='October 7, 2019' />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <MaterialIcons name='account-balance-wallet' color='#655bd6' size={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='bell' color='#d0cbf3' size={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name='compass' color='#d0cbf3' size={28} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='settings' color='#d0cbf3' size={28} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 225,
        backgroundColor: '#6559d9',
        padding: 25
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#fff'
    },
    footer: {
        height: 60,
        marginTop: 1,
        elevation: 6,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 35
    },
    welcomeText: {
        color: '#ccc8ff',
        fontSize: 23,
        fontFamily: 'sans-serif-medium'
    },
    name: {
        color: '#fff',
        fontSize: 19,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    balanceLabel: {
        color: '#fff',
        fontSize: 17,
        alignSelf: 'flex-end',
        fontFamily: 'sans-serif-medium'
    },
    balance: {
        color: '#fff',
        fontSize: 23,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },
    selection: {
        margin: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    transactionsSelect: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 6,
        padding: 15
    },
    expensesSelect: {
        marginLeft: 25,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        padding: 15
    },
    transactionLabel: {
        color: '#6559d9',
        fontWeight: 'bold',
        fontSize: 15
    },
    transactionAmount: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    selectionInfo: {
    },
    selectIcon: {
        marginTop: 3,
        marginRight: 10
    },
    expensesLabel: {
        color: '#eb6800',
        fontWeight: 'bold',
        fontSize: 15
    },
    expensesAmount: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.5
    },
    labelRow: {
        margin: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelLine: {
        width: 8.5,
        height: 1.75,
        backgroundColor: '#6559d9',
    },
    label: {
        marginHorizontal: 3,
        fontSize: 13,
        color: '#6559d9',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    montlyItem: {
        paddingTop: 0,
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameAndDate: {
        flex: 1,
        marginLeft: 20
    },
    transactionName: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    transactionDate: {
        fontSize: 11,
        fontFamily: 'sans-serif-light'
    }
})

export default Sample8