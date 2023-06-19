import React, {useContext, useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import {StyleSheet, View ,InpuSafeAreaView, StatusBar, ViewtField, Keyboard, SafeAreaView,Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import UserContexte from '../UserContext';


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
  const {bmr, setBMR} = useContext(UserContexte);
  const [genderOpen, setGenderOpen] = useState(false);
  const [ActivityLevelOpen, setActivityLevelOpen] = useState(false);
  const [HealthGoalOpen, setHealthGoalOpen] = useState(false);

  const [genderValue, setGenderValue] = useState(null);
  const [ActivityLevelValue, setActivityLevelValue] = useState(null);
  const [HealthGoalValue, setHealthGoalValue] = useState(null);

  const [gender, setGender] = useState([

    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ]);
  const  [activityLevel, setActivityLevel] = useState([

    {label: 'Sedentary', value: 'sedentary'},
    {label: 'Light exercise', value: 'light_exercise'},
    {label: 'Moderate exercise', value: 'moderate_exercise'},
    {label: 'Heavy exercise', value: 'heavy_exercise'},
    {label: 'Extra active', value: 'extra_active'}

  ]);
  const [healthGoal, setHealthGoal] = useState([

    {label: 'Weight loss', value: 'weight_loss'},
    {label: 'Weight maintenance', value: 'weight_maintenance'},
    {label: 'Weight gain', value: 'weight_gain'},
  ])
    
  const handleGenderChange = (itemValue) => {
    setGenderValue(itemValue);
  };
  const handleActivityLevelChange = (itemValue) => {
    setActivityLevelValue(itemValue);
  };
  const handleHealthGoalChange = (itemValue) => {
    setHealthGoalValue(itemValue);
  };

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
   
      if(genderValue === "Male"){
        return ((88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activityLevelValues[ActivityLevelValue]) + weightGoals[HealthGoalValue];
      }else if(genderValue === "Female"){
        return ((447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * activityLevelValues[ActivityLevelValue]) + weightGoals[HealthGoalValue];
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
    const bmrTemp = calculateBMR();
    setBMR(bmrTemp);
    setResult(bmrTemp);
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
      label="Height (cm)"
      value={height}
      onChangeText={text => setHeight(text)}
    />   


<TextInput
      label="Weight (kg)"
      value={weight}
      onChangeText={text => setWeight(text)}
    />   


<DropDownPicker
  open={genderOpen}
  value={genderValue}
  onValueChange={handleGenderChange}
  items={gender}
  setOpen={setGenderOpen}
  setValue={setGenderValue}
  setItems={setGender}
  placeholder="Gender"
  placeholderStyle={styles.placeholderStyles}
  containerStyle={[styles.dropdownContainer, { zIndex: 100 }]}

    />
         
      
    <View style={styles.spacerStyle} />
    

    <DropDownPicker
      open={ActivityLevelOpen}
      value={ActivityLevelValue}
      onValueChange={handleActivityLevelChange}
      items={activityLevel}
      setOpen={setActivityLevelOpen}
      setValue={setActivityLevelValue}
      setItems={setActivityLevel}
      containerStyle={[styles.dropdownContainer, { zIndex: 90 }]}
      placeholder="Activity level"


    />

    <View style={styles.spacerStyle} />
  

    <DropDownPicker
    open={HealthGoalOpen}
    value={HealthGoalValue}
    onValueChange={handleHealthGoalChange}
    items={healthGoal}
    setOpen={setHealthGoalOpen}
    setValue={setHealthGoalValue}
    setItems={setHealthGoal}
    containerStyle={[styles.dropdownContainer, { zIndex: 80 }]}
    placeholder="Objective"
    />
    <View style={styles.spacerStyle} />
    <Button  mode="contained" onPress={handleSubmit} disabled={!isFormValid} >
    Start
  </Button>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Your BMR (Basic Metabolic Rate) is :</Text>
          <Text style={styles.modalText}>{result}</Text>
          <Button  mode="contained" onPress={() => setIsModalVisible(false)} disabled={!isFormValid} >
          Close
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