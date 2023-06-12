import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import UserContexte from '../UserContext';
import DayMeals from './DayMeals';


const MealPlanning = ({ navigation }) => { 
  const { dayMenu } = useContext(UserContexte);
  

  return (
    <View>
      {Object.keys(dayMenu).map((day, index) => (
        <View key={index}>
          <Text style={styles.dayTitle}>{day}:</Text>
          <DayMeals dayMenu={dayMenu[day]} />
        </View>
      ))}
    </View>
  );
};

const styles = {
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
};



export default MealPlanning;
