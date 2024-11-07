//rnfe 
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Component/customButton';
import CustomInput from '../Component/customInput';
import auth from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// TS
interface SignInProps {
    // navigation: {
    // navigate: (Screen: string) => void;
    navigation: StackNavigationProp<any>;
    // };
}
const SignIn: React.FC<SignInProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // navigation.navigate("Home")
                navigation.dispatch(
                    StackActions.replace('Home')
                );
                console.log("Signed in successfully:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`errorCode ${errorCode}, errorMessage : ${errorMessage}`);
            });
    };

    const clickLink = () => { }

    const clickFacebook = () => { }

    const clickGoogle = () => { }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wellcome back,</Text>

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomButton text="Sign In" onPress={handleSignIn} />
            <CustomButton text="Forget Password" type="Link" onPress={clickLink} />

            <View style={styles.fixToText}>
                <CustomButton text="Facebook" type="Facebook" onPress={clickFacebook} />
                <CustomButton text="Google" type="Google" onPress={clickGoogle} />
            </View>
        </View>
    );
};
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