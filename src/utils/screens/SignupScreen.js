import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { useNavigation } from "@react-navigation/native";


export default function SignupScreen() {
    const [myData, setMyData] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const navigation = useNavigation();

    //   useEffect(() => {
    //     getDatabase();

    //   }, [])

    //   const getDatabase = async () => {
    //     try {
    //       const data = await firestore().collection("testing").doc("1pF3K4bIMDX4PM0ImLqz").get();
    //       setMyData(data._data)

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    const handleSignup = async () => {
        try {
            console.log(email, "  ", password);
            const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
            console.log(isUserCreated);
            navigation.navigate('Login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Signup</Text>
            <TextInput style={styles.inputTextStyle}
                placeholder="Enter email id"
                keyboardType={"email-address"}
                value={email}
                onChangeText={value => setEmail(value)}
            ></TextInput>
            <TextInput style={styles.inputTextStyle}
                placeholder="Enter password"
                secureTextEntry={true}
                value={password}
                onChangeText={value => setpassword(value)}
            ></TextInput>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => handleSignup()}
                >
                <Text style={styles.loginButtonText}

                >Signup</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={{padding:10}}>Already have an account?</Text>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("Login")}}>
                <Text style={styles.loginText2}>Clich here</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    loginButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },

    loginText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',

    },

    inputTextStyle: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderRadius: 30,
        margin: 10,
        padding: 10
    },

    buttonStyle: {
        height: 40,
        width: '60%',
        backgroundColor: 'green',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupContainer: {
        flexDirection:'row'
    },
    loginText2: {
        color:'blue',
        padding:10
    }
})

