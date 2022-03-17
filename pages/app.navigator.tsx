import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName='Accueil'>
            <Screen name="Accueil" component={Accueil}></Screen>

        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;