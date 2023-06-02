import React, {useState, useEffect } from 'react';
import {StyleSheet, View,Text,TextInput, Button, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
    <View style={styles.container}>
      <Text style={styles.label}>Votre Age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} keyboardType="numeric"/>

      <Text style={styles.label}>Votre Taille :</Text>
      <TextInput style={styles.input} value={height} onChangeText={text => setHeight(text)} keyboardType="numeric" />

      <Text style={styles.label}>Votre Poids:</Text>
      <TextInput style={styles.input} value={weight} onChangeText={text => setWeight(text)} keyboardType="numeric"/>

      <Text style={styles.label}>Votre Sexe:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Sélectionnez votre sexe', value: null }}
        items={[
          { label: 'Homme', value: 'Male' },
          { label: 'Femme', value: 'Female' },
          { label: 'Autre', value: 'other' },
        ]}
        style={pickerSelectStyles}
        value={gender}
        onValueChange={(value) => setGender(value)}
      />

      <Text style={styles.label}>Niveau d'activité:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Sélectionnez votre niveau d\'activité', value: null }}
        items={[
          { label: 'Exercices légers', value: 'light_exercise' },
          { label: 'Exercices modérés', value: 'moderate_exercise' },
          { label: 'Exercices difficiles', value: 'heavy_exercise' },
          { label: 'Sportif de haut niveau', value: 'extra_active' },
        ]}
        style={pickerSelectStyles}
        value={activityLevel}
        onValueChange={(value) => setActivityLevel(value)}
      />

      <Text style={styles.label}>Objectif de santé:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Sélectionnez votre objectif de santé', value: null }}
        items={[
          { label: 'Perte de poids', value: 'weight_loss' },
          { label: 'Maintien de poids', value: 'weight_maintenance' },
          { label: 'Gain de Poids', value: 'weight_gain' },
        ]}
        style={pickerSelectStyles}
        value={healthGoal}
        onValueChange={(value) => setHealthGoal(value)}
      />
      <Button title="Commencer" onPress={handleSubmit} disabled={!isFormValid} />
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
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
    marginBottom: 10,
  },
});

export default HealthGoals;