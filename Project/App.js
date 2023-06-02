import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthGoals from './Screen/HealthGoals.js';
import FoodDatabase from './Screen/FoodDatabase.js';
import MealPlanning from './Screen/MealPlanning.js';
import SearchInterface from './Screen/SearchInterface.js';

import { NavigationContainer} from '@react-navigation/native';



const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer> 
    <Tab.Navigator>
      <Tab.Screen name="HealthGoals" component={HealthGoals} />
      <Tab.Screen name="FoodDatabase" component={MealPlanning} />
      <Tab.Screen name="MealPlannings" component={FoodDatabase} />
      <Tab.Screen name="SearchInterface" component={SearchInterface} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
