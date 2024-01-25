import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../screens/Menu'
import Sample1 from '../screens/Sample1'
import Sample2 from '../screens/Sample2'
import Sample3 from '../screens/Sample3'
import Sample4 from '../screens/Sample4'
import Sample5 from '../screens/Sample5'
import Sample6 from '../screens/Sample6'
import Sample7 from '../screens/Sample7'
import Sample8 from '../screens/Sample8'

const StackNav = createStackNavigator()

const Stack = () => {
    return (
        <StackNav.Navigator
            initialRouteName='Menu'
        >
            <StackNav.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
            <StackNav.Screen name='uisample1' component={Sample1}
                options={{ title: '' }}
            />
            <StackNav.Screen name='uisample2' component={Sample2}
                options={{ title: '' }}
            />
            <StackNav.Screen name='uisample3' component={Sample3}
                options={{
                    headerShown: false
                }}
            />
            <StackNav.Screen name='uisample4' component={Sample4}
                options={{ title: '' }}
            />
            <StackNav.Screen name='uisample5' component={Sample5}
                options={{
                    headerShown: false
                }}
            />
            <StackNav.Screen name='uisample6' component={Sample6}
                options={{
                    headerShown: false
                }}
            />
            <StackNav.Screen name='uisample7' component={Sample7}
                options={{
                    headerShown: false
                }}
            />
            <StackNav.Screen name='uisample8' component={Sample8}
                options={{
                    headerShown: false
                }}
            />
        </StackNav.Navigator>
    )
}

export default Stack