import React, {useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import {StyleSheet, View,Text,TextInput, Button, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';

const handleDismissKeyboard = () => {
  Keyboard.dismiss();
};


const HealthGoals = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthGoal, setHealthGoal] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState(0);

  const activityLevelValues = {
    sedentary: 1.2,
    light_exercise: 1.375,
    moderate_exercise: 1.55,
    heavy_exercise: 1.725,
    extra_active: 1.9,
  };

  const weightGoals = {
    weight_loss: -500,
    weight_gain: 500,
    weight_maintenance: 0,
  };

  calculateBMR = () => { 
      const activityLevelValue = activityLevelValues[activityLevel];
      const weightGoalValue = weightGoals[healthGoal];
      if(gender === "Male"){
        return ((88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activityLevelValue) + weightGoalValue;
      }else if(gender === "Female"){
        return ((447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * activityLevelValue) + weightGoalValue;
      }else{
        return null;
      }
  };


  useEffect(() => {
    // Vérifier si tous les champs sont remplis pour activer/désactiver le bouton de soumission
    if (age && gender && height && weight && activityLevel && healthGoal) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [age, gender, height, weight, activityLevel, healthGoal]);

  const handleSubmit = () => {
    console.log('Form submitted!');
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Activity Level:', activityLevel);
    console.log('Health Goal:', healthGoal);
    
    const bmr = calculateBMR();
    console.log('BMR:', bmr);
    setResult(bmr);
    setIsModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
    <View style={styles.container}>
      <Text style={styles.label}>Votre Age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} keyboardType="numeric"/>

      <Text style={styles.label}>Votre Taille (cm):</Text>
      <TextInput style={styles.input} value={height} onChangeText={text => setHeight(text)} keyboardType="numeric" />

      <Text style={styles.label}>Votre Poids (kg):</Text>
      <TextInput style={styles.input} value={weight} onChangeText={text => setWeight(text)} keyboardType="numeric"/>

      <Text style={styles.label}>Votre Sexe:</Text>
      <Picker style={styles.picker} selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Homme" value="Male" />
        <Picker.Item label="Femme" value="Female" />
      </Picker>

      <Text style={styles.label}>Niveau d'activité:</Text>
      <Picker style={styles.picker} selectedValue={activityLevel} onValueChange={(itemValue) => setActivityLevel(itemValue)}>
        <Picker.Item label="Sédentaire" value="sedentary" />
        <Picker.Item label="Exercices légers" value="light_exercise" />
        <Picker.Item label="Exercices modérés" value="moderate_exercise" />
        <Picker.Item label="Exercices difficiles" value="heavy_exercise" />
        <Picker.Item label="Sportif de haut niveau" value="extra_active" />
      </Picker>

      <Text style={styles.label}>Objectif de santé:</Text>
      <Picker style={styles.picker} selectedValue={healthGoal} onValueChange={(itemValue) => setHealthGoal(itemValue)}
      >
        <Picker.Item label="Perte de poids" value="weight_loss" />
        <Picker.Item label="Maintien de poids" value="weight_maintenance" />
        <Picker.Item label="Gain de Poids" value="weight_gain" />
      </Picker>

      <Button title="Commencer" onPress={handleSubmit} disabled={!isFormValid} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Votre BMR est :</Text>
          <Text style={styles.modalText}>{result}</Text>
          <Button title="Fermer" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    minHeight: '100%', // ou utilisez flex: 1 si vous préférez
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HealthGoals;