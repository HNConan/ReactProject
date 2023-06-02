import React from 'react';
import { View, Text, Button } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import getData from '../LinkApi.js'
const SearchInterface = () => {
  const [text, setText] = React.useState('What are you looking for ?...');

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

  const onChangeText = (inputText) => {
    setText(inputText);
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={text}

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchInterface;