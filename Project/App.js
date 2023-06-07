import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthGoals from './Screen/HealthGoals.js';
import FoodDatabase from './Screen/FoodDatabase.js';
import MealPlanning from './Screen/MealPlanning.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer} from '@react-navigation/native';
import { UserContexteProvider } from './UserContext';



const Tab = createBottomTabNavigator();



export default function App() {


  return (
    <UserContexteProvider>
      <NavigationContainer> 
      <Tab.Navigator>
        <Tab.Screen name="HealthGoals" component={HealthGoals}  options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="MealPlanning" component={MealPlanning} options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="FoodDatabase" component={FoodDatabase} options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-apple" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
      
      </NavigationContainer>
    </UserContexteProvider>
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
