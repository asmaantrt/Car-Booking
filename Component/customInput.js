import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const customInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry} />


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F9FAFA',
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,



  },
  input: {
    paddingHorizontal: 30,
    borderColor: '#FEFEFE',
   
    borderWidth: 2,
    borderRadius: 999,
    backgroundColor: '#FEFEFE',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
export default customInput