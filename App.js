/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import HomeScreen from './src/Screens/HomeScreen';
import Favourites from './src/Screens/Favourites';
import Category from './src/Screens/Category';
const Tab = createBottomTabNavigator();
const TabRoutes = ()=>{
  return(
    <Tab.Navigator>
    <Tab.Screen name ="BooksHub" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <EntypoIcon name="home" size={25} color="grey" />
      )
    }}/>
    <Tab.Screen name = "Favourites" component={Favourites} options={{
      tabBarLabel: 'Favourites',
      tabBarIcon: () => (
        <FontistoIcon name="favorite" size={25} color="grey" />
      )
    }}/>
   </Tab.Navigator>
  )
}
const Stack = createStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabsScreen'>
        <Stack.Screen options={{headerShown: false}} name="TabsScreen" component={TabRoutes}/>
        <Stack.Screen name="Category" component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});

