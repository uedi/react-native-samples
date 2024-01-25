import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import Stack from './navigation/Stack'

const Main = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Stack />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Constants.statusBarHeight
    }
})

export default Main