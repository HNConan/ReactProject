import React, { useContext, useEffect } from 'react';
import {SafeAreaView, Button, View,Text,StyleSheet, TextInput,ScrollView, Image } from 'react-native';
import LinkApi from '../LinkApi'
import {Picker} from '@react-native-picker/picker';
import { Modal } from 'react-native';
import UserContexte from '../UserContext';
import { useRoute } from '@react-navigation/native';





const FoodDatabase = ({ navigation }) => {
  const route = useRoute();
  const [text, setText] = React.useState('What are you looking for ?...');
  const [searchResults, setSearchResults] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState('Monday');
  const [selectedValue, setSelectedValue] = React.useState('Breakfast');
  const [selectedFood, setSelectedFood] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  const { dayMenu, setDayMenu } = useContext(UserContexte);


  useEffect(() => {
    if (selectedDay && selectedValue && selectedFood) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [selectedDay , selectedValue , selectedFood]);

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

const handleFirstAddToMenu = (result) => {
  setSelectedFood(result);
  if(route.params && route.params['day'] && route.params['meal']){
    setSelectedDay(route.params.day);
    setSelectedValue(route.params.meal);
    handleAddToMenu(route.params.day, route.params.meal, result);
    delete route.params.day;
    delete route.params.meal;
  }else{
    setModalVisible(true);
  }
};

const handleSearch = () => {
  search(text);
};

const onChangeText = (inputText) => {
  setText(inputText);
};

const handleAddToMenu = (day, meal, food) => {
  if(meal === "")
    return;
  if(!dayMenu[day][meal].some((item) => item.foodId === food.foodId)){
    
    const newDayMenu = {
      ...dayMenu,
    };
    
    newDayMenu[day][meal].push(food);
    setDayMenu(newDayMenu);
  }
  setSelectedDay(null);
  setSelectedValue(null);
  setModalVisible(false);
  navigation.navigate('MealPlanning');

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
          <Button title="Add to Menu"  onPress={() => (handleFirstAddToMenu(result))} />
          <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
          <Picker selectedValue={selectedDay} onValueChange={(itemValue) => setSelectedDay(itemValue)}>
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>

          </Picker>
          <Picker selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            <Picker.Item label="Breakfast" value="Breakfast"/>
            <Picker.Item label="Lunch" value="Lunch" />
            <Picker.Item label="Snack" value="Snack" />
            <Picker.Item label="Dinner" value="Dinner" />
          </Picker>
          <Button title="Add to Menu" disabled={!isFormValid} onPress={() => handleAddToMenu(selectedDay, selectedValue, selectedFood)} />

      </View>
      </Modal>

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