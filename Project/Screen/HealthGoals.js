import React, {useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View,Text,TextInput, Button, ScrollView } from 'react-native';
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
      <Picker style={styles.picker} selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Homme" value="Male" />
        <Picker.Item label="Femme" value="Female" />
        <Picker.Item label="Autre" value="other" />
      </Picker>

      <Text style={styles.label}>Niveau d'activité:</Text>
      <Picker style={styles.picker} selectedValue={activityLevel} onValueChange={(itemValue) => setActivityLevel(itemValue)}>
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
});

export default HealthGoals;