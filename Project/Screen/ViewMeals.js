import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, IconButton } from "react-native-paper";

const ViewMeals = ({ meals, title, onRemoveFood, onAddFood,calo }) => {
  return (
    <View>
        <View style={styles.mealTitleContainer}>
      <Text style={styles.mealTitle}>{title}:</Text>
      <Text style={styles.caloPerMeal} >{calo} (kcal)</Text>
      </View>


      <View style={styles.mealItemsContainer}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealItemContainer}>
            <Text style={styles.mealItem}>{meal.label}</Text>
            <View style={styles.iconButtonContainer}>
              <IconButton
                onPress={() => onRemoveFood(title, index)}
                icon="close"
              />
            </View>
          </View>
        ))}
        <View style={styles.ButtonContainer}>
          <Button
            mode="text"
            onPress={() => onAddFood(title)}
            labelStyle={styles.ButtonLabel}
          >
            Add Food
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  mealItemsContainer: {
    marginLeft: 10,
  },
  mealItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  mealItem: {
    marginLeft: 10,
  },
  iconButtonContainer: {
    marginRight: 10,
  },
  ButtonContainer: {
    marginLeft: 10,
    width: 100,
  
  },

  ButtonLabel: {
    color: 'blue',
  },
  caloPerMeal:
  {
    marginRight: 10,

  },
  mealTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
});
export default ViewMeals;
