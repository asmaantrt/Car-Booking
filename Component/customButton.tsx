import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

interface customButtonProps{
  text: string;
  type?: 'Button' | 'Facebook' | 'Google' | 'Link'| 'Request';
  onPress:() => void;
}

const customButton: React.FC<customButtonProps> = ({ text, type = "Button", onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container${type}`]
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text${type}`]
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 15,
    marginVertical: 20,

    borderRadius: 9,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#5C3E91',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',

  },
  containerLink: {
    backgroundColor: '#F7F8F8u'
  },
  textLink: {

    fontSize: 15,
    color: '#000000',

  },

  containerFacebook: {
    width: "40%",
    padding: 15,
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: '#DFDFDF',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#F9FAFA',
  },
  textFacebook: {
    fontSize: 17,
    color: '#000000',
  },

  containerGoogle: {
    width: "40%",
    padding: 15,
    marginRight: 20,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: '#DFDFDF',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#F9FAFA',
  },
  textGoogle: {
    fontSize: 17,
    color: '#000000',

  },

  containerRequest: {
    width: "30%",
    padding: 10,
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: '#5C3E91',
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#F9FAFA',
  },
  textRequest: {
    fontSize: 15,
    color: '#000000',

  },
});


export default customButton