import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import ViewMeals from './ViewMeals';
import UserContexte from '../UserContext';



const DayMeals = ({dayMenu, onRemoveFood, onAddFood }) => {
    const {bmr} = useContext(UserContexte);


    const calculateTotalCalories = (meals) => {
        let totalCalories = 0;
        Object.values(meals).forEach((mealList) => {
            mealList.forEach((meal) => {
            if (meal.nutrients) {
                totalCalories += meal.nutrients['ENERC_KCAL'];
            }
            });
        });
        return totalCalories;
      };
      const caloPerMeal = (meals) => {
        return calculateTotalCalories({ meals: [...meals] });
      };
      const calculManqueCalo = (bmr,kcals) => {
        const manque = bmr - kcals;
        if(bmr <= 0){
          return displayBMR(bmr);
        }
        if(manque < 0){
          return 0; 
        }
        return manque;
      };
      const displayBMR = (bmr) => {
        if(bmr <= 0){
          return "Calculer votre BMR dans l'onglet \"Calcul BMR\""; 
        }
        return bmr;
      };
      return (
        <View>
          <ViewMeals meals={dayMenu.Breakfast}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Breakfast" calo={caloPerMeal(dayMenu.Breakfast)} />
          
          <ViewMeals meals={dayMenu.Lunch}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Lunch"  calo={caloPerMeal(dayMenu.Lunch)} />
          <ViewMeals meals={dayMenu.Dinner}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Dinner" calo={caloPerMeal(dayMenu.Dinner)} />
          <ViewMeals meals={dayMenu.Snack}  onAddFood={onAddFood} onRemoveFood={onRemoveFood} title="Snack" calo={caloPerMeal(dayMenu.Snack)} />
          
          <Text style={styles.totalCalories}>
            <Text style={styles.underline}>Total Calories (kcal) :</Text> {calculateTotalCalories({'Breakfast' :[...dayMenu.Breakfast], 'Lunch' : [...dayMenu.Lunch], 'Dinner' : [...dayMenu.Dinner], 'Snack' : [...dayMenu.Snack]})}
          </Text>
          <Text style={styles.totalCalories}>
            <Text style={styles.underline}>Besoin Calories (kcal) :</Text> {displayBMR(bmr)}
          </Text>
          <Text style={styles.totalCalories}>
            <Text style={styles.underlineAndBold}>Manque Calories (kcal) :</Text> {calculManqueCalo(bmr, calculateTotalCalories({'Breakfast' :[...dayMenu.Breakfast], 'Lunch' : [...dayMenu.Lunch], 'Dinner' : [...dayMenu.Dinner], 'Snack' : [...dayMenu.Snack]}))}
          </Text>
        
  


    </View>
  );
};

const styles = {
    totalCalories: {
        fontSize: 18,
        marginTop: 10,
      },
    underline: {
      textDecorationLine: 'underline',
      },
      underlineAndBold: {
        textDecorationLine: 'underline',
        fontWeight : 'bold',
        },
};

export default DayMeals;
