import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ImageSlider from './Imageslider';

interface CustomRadioButtonProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
}

interface HomeProps{
  navigation: any
}
const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ label, selected, onSelect }) => (
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

const Home: React.FC<HomeProps> = ({ navigation }) => {

  const images: string[] = [
    'https://cashforcars-bc.com/wp-content/uploads/2021/07/cash-for-luxury-high-end-cars.jpg',
    'https://vehicle-images.dealerinspire.com/91ce-11001117/W1KAF4GB9RR209351/549d98816ba1ffa5ecdeadb974eed452.jpg',
    'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fhyundai%2Fcreta%2Fhyundai-creta.jpg%3Fv%3D92&w=3840&q=75',
    'https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg',
    'https://www.usnews.com/dims4/USNEWS/fe07e13/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F73%2F3c%2Ff3e29de34bc5aff570b53a9b540c%2F28-2023-acura-integra.jpg',

  ];
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider images={images} />
      <Text style={styles.text}>Choose your favorite type</Text>
      <Text style={styles.text2}>Select the type of car you want to book.</Text>
      <View style={styles.CustomButton}>
        <CustomRadioButton
        
          label="City car"
          selected={selectedValue === 'City'}
          onSelect={() => {
            setSelectedValue('City')
            navigation.navigate("Categories", { label: 'City' })
            // console.log(JSON.stringify(label))

          }}
        />
        <CustomRadioButton
          label="Sport car"
          selected={selectedValue === 'Sport'}
          onSelect={() => {
            setSelectedValue('Sport')
            navigation.navigate("Categories", { label: 'Sport' })
          }}
        />
        <CustomRadioButton
          label="Van car"
          selected={selectedValue === 'Van'}
          onSelect={() => {
            setSelectedValue('Van')
            navigation.navigate("Categories", { label: 'Van' })
          }}
        />
        <CustomRadioButton
          label="Small family car"
          selected={selectedValue === 'Small'}
          onSelect={() => {
            setSelectedValue('Small')
            navigation.navigate("Categories", { label: 'Small' })
          }}
        />
      </View>
      {/* {selectedValue && <CarTypeCard type={selectedValue} />} */}
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
  },
  text2: {
    marginTop: 5,
    paddingLeft: 30,
    fontSize: 12,
    color: '#808080',
    marginBottom: 20,

  },
  CustomButton: {
    paddingLeft: 30,
  }
});

export default Home;
