import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import UserContexte from '../UserContext';

const MealPlanning = ({ navigation }) => { 
  const { dayMenu } = useContext(UserContexte);
  const refresh = () => window.location.reload(true)

  useFocusEffect(() => {
    console.log(dayMenu);
    
  });

  return (
    <View>
      <Button title="Refresh" onClick={refresh}/>
      <Text style={styles.mealTitle}>Breakfast:</Text>
      <View style={styles.mealItemsContainer}>
        {dayMenu.Breakfast.map((food, index) => (
          <Text key={index} style={styles.mealItem}>
            {food.label}
          </Text>
        ))}
      </View>

      <Text style={styles.mealTitle}>Lunch:</Text>
      <View style={styles.mealItemsContainer}>
        {dayMenu.Lunch.map((food, index) => (
          <Text key={index} style={styles.mealItem}>
            {food.label}
          </Text>
        ))}
      </View>

      <Text style={styles.mealTitle}>Dinner:</Text>
      <View style={styles.mealItemsContainer}>
        {dayMenu.Dinner.map((food, index) => (
          <Text key={index} style={styles.mealItem}>
            {food.label}
          </Text>
        ))}
      </View>

      <Text style={styles.mealTitle}>Snack:</Text>
      <View style={styles.mealItemsContainer}>
        {dayMenu.Snack.map((food, index) => (
          <Text key={index} style={styles.mealItem}>
            {food.label}
          </Text>
        ))}
      </View>
      
    </View>
  );
};

const styles = {
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mealItemsContainer: {
    marginLeft: 10,
  },
  mealItem: {
    marginLeft: 10,
    marginBottom: 5,
  },
};


export default MealPlanning;
