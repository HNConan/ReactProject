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

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.color,
    primary: '#2d3436',
    accent: '#1C1C1C',
    background : '#636e72'
  }
};

export default function App() {
  
  return (
    <PaperProvider theme={theme}>

    <UserContexteProvider>

    <NavigationContainer> 
    <Tab.Navigator>
      <Tab.Screen name="HealthGoals" component={HealthGoals}  options={{
         tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
            title: 'Personnal Information',
           
           
          
        }}
      />
      <Tab.Screen name="MealPlanning" component={MealPlanning} options={{
         tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />
          ),
          title: 'Plannig repas',

        }} />
      <Tab.Screen name="FoodDatabase" component={FoodDatabase} options={{
         tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-apple" color={color} size={size} />
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
