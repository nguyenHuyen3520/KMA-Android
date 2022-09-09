import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Interface1Screen from '../Screens/Interface1Screen';
import Interface2Screen from '../Screens/Interface2Screen';
import Interface3Screen from '../Screens/Interface3Screen';
import Interface4Screen from '../Screens/Interface4Screen';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HOME">
                <Stack.Screen
                    name="HOME"
                    component={Home}
                    options={{
                        // headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="INTERFACE1" component={Interface1Screen}
                    options={{
                        // headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="INTERFACE2" component={Interface2Screen}
                    options={{
                        // headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="INTERFACE3" component={Interface3Screen}
                    options={{
                        // headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="INTERFACE4" component={Interface4Screen}
                    options={{
                        // headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation