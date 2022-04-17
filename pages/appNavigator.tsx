import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './Accueil';
import Accueil2 from './Accueil2';
import Enigme1 from './Enigme1';
import Enigme1_2 from './Enigme1_2';
import Enigme2 from './Enigme2';
import Enigme3 from './Enigme3';
import Enigme4 from './Enigme4';
import Enigme4_2 from './Enigme4_2';
import Enigme5 from './Enigme5';
import Enigme6 from './Enigme6';
import Felicitation from './Felicitation';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
    <Navigator initialRouteName='Accueil' screenOptions={{ headerStyle: { backgroundColor: "black" }, headerShown: true }} >
        <Screen name="Accueil" component={Accueil} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Accueil2" component={Accueil2} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme1" component={Enigme1} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme1_2" component={Enigme1_2} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme2" component={Enigme2} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme3" component={Enigme3} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme4" component={Enigme4} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme4_2" component={Enigme4_2} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme5" component={Enigme5} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Enigme6" component={Enigme6} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
        <Screen name="Felicitation" component={Felicitation} options={{ headerTitleStyle: { fontSize: 30 }, title: 'CybGame', headerTitleAlign: "center", headerTintColor: "white" }}></Screen>
    </Navigator >


)


export default AppNavigator;