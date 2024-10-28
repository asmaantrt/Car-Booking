import React, { Component } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet,SafeAreaView } from "react-native";
import SignIn from "./Screen/SignIn";
import SplashScreen from "./Screen/SplashScreen";
import Home from "./Screen/Home";
import Categories from "./Screen/Categories";
import Citycard from "./Screen/Citycard";
import Sportcard from "./Screen/Sportcard";
import Vancard from "./Screen/Vancard";
import Smallcard from "./Screen/Smallcard";

const Stack = createNativeStackNavigator();
class App extends Component{
  constructor() {
    super()}
  render(): React.ReactNode {
    return(
      //  <SignIn/> 
      <SafeAreaView style={styles.root}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:true}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Citycard" component={Citycard}/>
        <Stack.Screen name="Sportcard" component={Sportcard}/>
        <Stack.Screen name="Vancard" component={Vancard}/>
        <Stack.Screen name="Smallcard" component={Smallcard}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  root:{
  flex:1,
  
   
  },
});
 

export default App