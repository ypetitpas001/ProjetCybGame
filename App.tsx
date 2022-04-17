import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './pages/appNavigator';
import Enigme6 from './pages/Enigme6';

export default function App() {

  return (

    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
});


{/*<NavigationContainer>
      <AppNavigator />
  </NavigationContainer>*/}
