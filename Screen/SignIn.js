//rnfe 
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Component/customButton';
import CustomInput from '../Component/customInput';
import auth from "../firebase/firebase";
import { signInWithEmailAndPassword  } from "firebase/auth";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = () => {

    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("Home")
                console.log("Signed in successfully:", user);
            
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`errorCode ${errorCode}, errorMessage : ${errorMessage}`);
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wellcome back,</Text>

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail} />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry />
            <CustomButton text="Sign In" onPress={handleSignIn} />
            <CustomButton text="Forget Password" type="Link" />
            <View style={styles.fixToText}>
                <CustomButton text="Facebook" type="Facebook" />
                <CustomButton text="Google" type="Google" /></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#F7F8F8'

    },
    text: {
        marginTop: 70,
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default SignIn