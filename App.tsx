import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView } from "react-native";
import SignIn from "./Screen/SignIn";
import SplashScreen from "./Screen/SplashScreen";
import Home from "./Screen/Home";
import Categories from "./Screen/Categories";

const Stack = createNativeStackNavigator();
interface AppProps { }
interface AppState { }

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      //  <SignIn/> 
      <SafeAreaView style={styles.root}>
        <NavigationContainer>

          <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Categories" component={Categories} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


export default App