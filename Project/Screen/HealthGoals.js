import React, {useState} from 'react';
import {StyleSheet, View,Text,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
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
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
    <View style={styles.container}>
      <Text style={styles.label}>Votre Age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} keyboardType="numeric"/>

      <Text style={styles.label}>Votre Sexe:</Text>
      <Picker
        style={styles.picker}
        selectedValue={activityLevel}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
      >
        <Picker.Item label="Homme" value="Male" />
        <Picker.Item label="Femme" value="Female" />
        <Picker.Item label="Non Binaire" value="binary" />
      </Picker>

      <Text style={styles.label}>Votre Taille :</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Votre Poids:</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Niveau d'activité:</Text>
      <Picker
        style={styles.picker}
        selectedValue={activityLevel}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
      >
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Light Exercise" value="light exercise" />
        <Picker.Item label="Moderate Exercise" value="moderate exercise" />
        <Picker.Item label="Heavy Exercise" value="heavy exercise" />
        <Picker.Item label="Extra Active" value="extra active" />
      </Picker>

      <Text style={styles.label}>Objectif de santé:</Text>
      <Picker
        style={styles.picker}
        selectedValue={healthGoal}
        onValueChange={(itemValue) => setHealthGoal(itemValue)}
      >
        <Picker.Item label="Perte de poids" value="weight loss" />
        <Picker.Item label="Maintien de poids" value="weight maintenance" />
        <Picker.Item label="Gain de Poids" value="weight gain" />
      </Picker>

      <Button title="Commencer" onPress={handleSubmit} />
    </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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