import { View, Text, Image, StyleSheet , useWindowDimensions} from 'react-native';
import React, { useEffect } from 'react'
import logo from '../assets/img/logo.jpg';
const SplashScreen = ({navigation}) => {

  const {height} = useWindowDimensions();
  useEffect(() => {
    // الانتقال إلى الصفحة الجديدة بعد 5 ثوانٍ
    const timer = setTimeout(() => { navigation.replace('SignIn'); }, 3000);
  // تنظيف المؤقت عند إزالة المكون
  return () => clearTimeout(timer);
}, [navigation]);
    
  return (
    <View style={styles.container}>
        <Image source={logo} style={[styles.logo , { height: height * 0.5, width: height * 0.5, borderRadius: (height * 0.5) / 2 },resizeMode='contain']} />
      <Text style={styles.text}>Welcome</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
    
      flex:1,
      alignItems:'center',
      padding:20,
      marginTop:40,
    },
    logo:{
    
        width:"70%",
        maxHeight:300,
        maxWidth:300
    },

    text:{
      fontSize:30,
      fontWeight:'bold'
    }
});
export default SplashScreen