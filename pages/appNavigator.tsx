import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';
import Accueil2 from './Accueil2';
import Enigme1 from './Enigme1';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <Navigator initialRouteName='Accueil'>
        <Screen name="Accueil" component={Accueil} ></Screen>
        <Screen name="Accueil2" component={Accueil2} ></Screen>
        <Screen name="Enigme1" component={Enigme1} ></Screen>
    </Navigator >


)



export default AppNavigator;