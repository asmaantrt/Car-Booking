// App.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ImageSlider from './Imageslider';

const CustomRadioButton = ({ label, selected, onSelect }) => (
  <TouchableOpacity
    style={[styles.radioButton,
    { backgroundColor: selected ? '#5C3E91' : '#FFF' }]}
    onPress={onSelect}
  >
    <Text style={[styles.radioButtonText,
    { color: selected ? '#FFF' : '#000' }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const Home = ({navigation}) => {

  const images = [
    'https://cashforcars-bc.com/wp-content/uploads/2021/07/cash-for-luxury-high-end-cars.jpg',
    'https://vehicle-images.dealerinspire.com/91ce-11001117/W1KAF4GB9RR209351/549d98816ba1ffa5ecdeadb974eed452.jpg',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fhyundai%2Fcreta%2Fhyundai-creta.jpg%3Fv%3D92&w=3840&q=75',
    'https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg',
    'https://www.usnews.com/dims4/USNEWS/fe07e13/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F73%2F3c%2Ff3e29de34bc5aff570b53a9b540c%2F28-2023-acura-integra.jpg',
   
  ]
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider images={images}/>
      <Text  style={styles.text}>Choose your favorite type</Text>
      <View style={styles.CustomButton}>
      <CustomRadioButton
        label="City car"
        selected={selectedValue === 'option1'}
        onSelect={() =>{ setSelectedValue('option1');
          navigation.navigate("Citycard", { label:'City car'});
         
        }}
      />
      <CustomRadioButton
        label="Sport car"
        selected={selectedValue === 'option2'}
        onSelect={() =>{ setSelectedValue('option2');
          navigation.navigate("Categories", { label:'Sport car'});
              
        }}
      />
      <CustomRadioButton
        label="Van car"
        selected={selectedValue === 'option3'}
        onSelect={() =>{ setSelectedValue('option3');
          navigation.navigate("Categories", { label:'Van car'});
              
        }}
      />

      <CustomRadioButton
        label="Small family car"
        selected={selectedValue === 'option4'}
        onSelect={() =>{ setSelectedValue('option4');
          navigation.navigate("Smallcard", { label:'Small family car'});
              
        }}
      />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft:30,
    backgroundColor: '#F5F5F5',
  },
  radioButton: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#5C3E91',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "90%",
  },
  radioButtonText: {
    fontSize: 20,
  },
  text: {
    marginTop: 20,
    paddingLeft: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5C3E91',
    marginBottom: 20,

},
CustomButton:{
  paddingLeft:30,
}
});

export default Home;
