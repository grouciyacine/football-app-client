import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Load from './screens/Load';
import Home from './screens/Home';
import Soccer from './screens/Soccer';
import Ligue from './screens/Ligue';
import Club from './screens/Club';
export type RootNavig={
Load:any,
Home:any,
Soccer:any,
Club:any,
Ligue:any
}
const Stack=createNativeStackNavigator<RootNavig>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Load' component={Load} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Soccer' component={Soccer} options={{headerShown:false}}/>
        <Stack.Screen name='Club' component={Club} options={{headerShown:false}}/>
        <Stack.Screen name='Ligue' component={Ligue} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

