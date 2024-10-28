import { View, Text } from 'react-native'
import React from 'react'

const Categories = ({ route, navigation }) => {
  const { label } = route.params;
  let displayLabel;

  const images = [
    'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
    'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY',
    'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
    'https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs',
    'https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA',
    'https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY',
  ]



  if (JSON.stringify(label) === '"City car"') {
    // displayLabel= <Text>label: {JSON.stringify(label)}< /Text>
    navigation.navigate("Citycard");

  } else if (JSON.stringify(label) === '"Sport car"') {
    // displayLabel=  <Text>label: {JSON.stringify(label)}</Text>
    navigation.navigate("Sportcard");

  } else if (JSON.stringify(label) === '"Van car"') {
    // displayLabel=  <Text>label: {JSON.stringify(label)}</Text>
    navigation.navigate("Vancard");

  } else {
    // console.log(JSON.stringify(label)) ;
    // displayLabel=  <Text>label:  Small family car </Text>
    navigation.navigate("Smallcard");
  }
  return (
    <View>

      {/* {displayLabel} */}


    </View>

    
  )
}

export default Categories;