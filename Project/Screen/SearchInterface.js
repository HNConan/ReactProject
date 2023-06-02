import React from 'react';
import { View, Text, Button } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const SearchInterface = () => {
  const [text, onChangeText] = React.useState('What are you looking for ?...');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
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