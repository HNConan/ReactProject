import React from 'react';
import {SafeAreaView, Button, View,Text,StyleSheet, TextInput,ScrollView, Image } from 'react-native';
import LinkApi from '../LinkApi'
import MealPlanning from './MealPlanning'
import {Picker} from '@react-native-picker/picker';
import { Modal } from 'react-native';

const FoodDatabase = ({ navigation }) => {
  const [text, setText] = React.useState('What are you looking for ?...');
  const [searchResults, setSearchResults] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Breakfast');

  const DayMenu = {
    "Breakfast": [],
    "Lunch": [],
    "Dinner": [],
    "Snack": []
  };

  const NutrimentsLabels = {
    ENERC_KCAL: "Energy (kcal)",
    CHOCDF: "Carbohydrate by difference (g)",
    FAT: "Lipid (g)",
    FIBTG: "Fiber (g)",
    PROCNT: "Protein (g)",
  };

const handleFocus = () => {
  if (text === 'What are you looking for ?...') {
    setText('');
  }
};

const handleBlur = () => {
  if (text === '') {
    setText('What are you looking for ?...');
  }
};

const handleSearch = () => {
  search(text);
};

const onChangeText = (inputText) => {
  setText(inputText);
};

const handleAddToMenu = (meal, food) => {
  if(meal === "")
    return;
  if(!DayMenu[meal].some((item) => item.foodId === food.foodId)){
    DayMenu[meal].push(food);
  }
  console.log(DayMenu);
};


const search = async (query) => {
  try {
    const data = await LinkApi.getFoodIngredients(query);
    const results = [];

    await Promise.all(
      data.map(async (result) => {
        const info = await LinkApi.getFoodInformations(result);
        if(info.parsed.length > 0){
          if(!results.some((item) => item.foodId === info.parsed[0].food.foodId)){
            results.push(info.parsed[0].food);
          }
        }
      })
    );

    setSearchResults(results);
  } catch (error) {
    console.error(error);
  }
};

return (
  <SafeAreaView style={styles.container}>
    <TextInput style={styles.input} onChangeText={onChangeText} onFocus={handleFocus} onBlur={handleBlur} value={text}/>
    <Button title="Search" onPress={handleSearch} />
    <ScrollView style={styles.scrollView}>
        {searchResults.map((result, index) => (
          <View key={index} style={styles.resultItem}>
          <Image source={{ uri: result.image }} style={styles.resultImage} />
          <Text style={styles.resultTitle}>{result.knownAs.toUpperCase()}</Text>
          <Text style={styles.resultLabel}>Label: {result.label}</Text>
          <Text style={styles.resultNutrients}>Nutrients:</Text>
          <View style={styles.nutrientContainer}>
            {Object.entries(result.nutrients).map(([key, value]) => (
              <View key={key} style={styles.nutrientItem}>
                <Text style={styles.nutrientKey}>{NutrimentsLabels[key]}: </Text>
                <Text style={styles.nutrientValue}>{value}</Text>
              </View>
            ))}
          </View>
          <Button title="Add to Menu" onPress={() => setModalVisible(true)} />
          <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
            <Picker selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
          <Picker.Item label="Breakfast" value="Breakfast"/>
          <Picker.Item label="Lunch" value="Lunch" />
          <Picker.Item label="Snack" value="Snack" />
          <Picker.Item label="Dinner" value="Dinner" />
          </Picker>
          <Button title="Add to Menu" onPress={() => handleAddToMenu(selectedValue, result)} />

      </View>
      </Modal>
      <MealPlanning mealPlan={DayMenu} />

        </View>
        
        ))}
      </ScrollView>
  </SafeAreaView>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultLabel: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  resultNutrients: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nutrientContainer: {
    marginLeft: 20,
  },
  nutrientItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  nutrientKey: {
    fontWeight: 'bold',
  },
  nutrientValue: {
    marginLeft: 5,
  },
});
export default FoodDatabase;