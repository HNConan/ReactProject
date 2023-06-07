import React, {useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import {StyleSheet, View ,InpuSafeAreaView, StatusBar, ViewtField, Keyboard, SafeAreaView,Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  Button,
  TextInput,
} from "react-native-paper";


const handleDismissKeyboard = () => {
  Keyboard.dismiss();
};


const HealthGoals = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState(0);


  const [open, setOpen] = useState(false);
  const [openSD, setOpenSD] = useState(false);
  const [openTD, setOpenTD] = useState(false);

  const [value, setValue] = useState(null);
  const [valueSD, setValueSD] = useState(null);
  const [valueTD, setValueTD] = useState(null);

  const [gender, setGender] = useState([

    {label: 'Homme', value: 'male'},
    {label: 'Femme', value: 'female'}
  ]);
  const  [activityLevel, setActivityLevel] = useState([

    {label: 'Sédentaire', value: 'sedentary'},
    {label: 'Exercices légés', value: 'light_exercise'},
    {label: 'Exercices modérés', value: 'moderate_exercise'},
    {label: 'Exercices difficiles', value: 'heavy_exercise'},
    {label: 'Sportif de haut niveau', value: 'extra_active'}

  ]);
  const [healthGoal, setHealthGoal] = useState([

    {label: 'Perte de poids', value: 'weight_loss'},
    {label: 'Maintien de poids', value: 'weight_maintenance'},
    {label: 'Gain de Poids', value: 'weight_gain'},
  ])
    
  



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

 
       


    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
    <View style={styles.container}>
      
      <TextInput
      label="Age"
      value={age}
      onChangeText={text => setAge(text)}
    />   

<TextInput
      label="Taille"
      value={height}
      onChangeText={text => setHeight(text)}
    />   


<TextInput
      label="Poids"
      value={weight}
      onChangeText={text => setWeight(text)}
    />   


<DropDownPicker
      open={open}
      value={value}
      items={gender}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setGender}
    />
        
      
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />

    <DropDownPicker
      open={openSD}
      value={valueSD}
      items={activityLevel}
      setOpen={setOpenSD}
      setValue={setValueSD}
      setItems={setActivityLevel}
    />

    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />

    <DropDownPicker
    open={openTD}
    value={valueTD}
    items={healthGoal}
    setOpen={setOpenTD}
    setValue={setValueTD}
    setItems={setHealthGoal}
    />

    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />
    <View style={styles.spacerStyle} />


   

    <Button  mode="contained" onPress={handleSubmit} disabled={!isFormValid} >
    Commencer
  </Button>




      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Votre BMR est :</Text>
          <Text style={styles.modalText}>{result}</Text>
          <Button  mode="contained" onPress={() => setIsModalVisible(false)} disabled={!isFormValid} >
          Fermer
  </Button>
        </View>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
  );
  
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    minHeight: '100%', 
  },
  title:
  {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
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
  spacerStyle: {
    marginBottom: 25,
  },
 
});

export default HealthGoals;