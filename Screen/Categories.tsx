import { View, Text } from 'react-native'
import React from 'react'
import CarTypeCard from '../Component/CarTypeCard';
interface CategoriesProps{
  route: any
}
const Categories: React.FC<CategoriesProps> = ({ route }) => {
  const { label } = route.params;
  console.log(label)

  return (
    <View>
      {/* {displayLabel} */}
      <CarTypeCard type={label} />
    </View>  
  )
}

export default Categories;