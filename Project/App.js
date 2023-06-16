import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthGoals from './Screen/HealthGoals.js';
import FoodDatabase from './Screen/FoodDatabase.js';
import MealPlanning from './Screen/MealPlanning.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer} from '@react-navigation/native';
import { UserContexteProvider } from './UserContext';


import { DefaultTheme,DarkTheme, Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();



export default function App() {
  
  return (
    <PaperProvider theme={DefaultTheme}>

    <UserContexteProvider>

    <NavigationContainer> 
    <Tab.Navigator>
      <Tab.Screen name="HealthGoals" component={HealthGoals}  options={{
         tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home"  size={size} />
          ),
            title: 'Personnal Information',
           
           
          
        }}
      />
      <Tab.Screen name="MealPlanning" component={MealPlanning} options={{
         tabBarIcon: ({  size }) => (
            <MaterialCommunityIcons name="food-fork-drink"  size={size} />
          ),
          title: 'Planning repas',

        }} />
      <Tab.Screen name="FoodDatabase" component={FoodDatabase} options={{
         tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="food-apple" size={size} />
          ),
          title: 'Rechercher un aliment',

        }} />
    </Tab.Navigator>
    </NavigationContainer>
    </UserContexteProvider>
    </PaperProvider>

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
