import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableHighlight } from 'react-native';
import React, { useEffect } from 'react'
// TS
import { StackNavigationProp } from '@react-navigation/stack';
// TS
interface SplashScreenProps {
  navigation: StackNavigationProp<any>;
}
const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {

  const { height } = useWindowDimensions();

  useEffect(() => {
    // الانتقال إلى الصفحة الجديدة بعد 5 ثوانٍ
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 5000);

    // تنظيف المؤقت عند إزالة المكون
    return () => clearTimeout(timer);
  }, [navigation]);

  return (

    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.profileImgContainer,
        { borderColor: 'black', borderWidth: 1 }]}
      >
        {<Image
          source={require('../assets/img/logo_2.jpg')}
          style={[styles.logo_img]}

        />}
      </TouchableHighlight>

      <Text style={styles.text}>Welcome</Text>
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  logo_img: {
    height: 300,
    width: 300,
    borderRadius: 150,
  },

  profileImgContainer: {
    marginLeft: 8,
    height: 300,
    width: 300,
    borderRadius: 150,
  },

  text: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },


});
export default SplashScreen