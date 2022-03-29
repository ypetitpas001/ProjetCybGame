import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';
import Accueil2 from './Accueil2';
import Enigme1 from './Enigme1';
import Enigme1_2 from './Enigme1_2';
import Enigme2 from './Enigme2';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <Navigator initialRouteName='Accueil' screenOptions={{headerShown:false}}>
        <Screen name="Accueil" component={Accueil} ></Screen>
        <Screen name="Accueil2" component={Accueil2} ></Screen>
        <Screen name="Enigme1" component={Enigme1} ></Screen>
        <Screen name="Enigme1_2" component={Enigme1_2} ></Screen>
        <Screen name="Enigme2" component={Enigme2} ></Screen>
    </Navigator >


)


export default AppNavigator;