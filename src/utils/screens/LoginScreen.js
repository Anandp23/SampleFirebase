import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
    const [myData, setMyData] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const navigation = useNavigation();

    //   useEffect(() => {
    //     getDatabase();

    //   }, [])

    //   const getDatabase = async () => {
    //     try {
    //     //   const data = await firestore().collection("testing").doc("1pF3K4bIMDX4PM0ImLqz").get();
    //     //   setMyData(data._data)


    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    const handleLogin = async () => {
        try {
              
              const isUserLogin = await auth().signInWithEmailAndPassword(email,password);
               console.log(isUserLogin);
            // console.log("email=>", email);
            // console.log("password=>", password);

            navigation.navigate("Home",{
                email: isUserLogin.user.email,
                uid: isUserLogin.user.uid
            })
        } catch (error) {
            console.log(error);
            ToastAndroid.show(error.message,ToastAndroid.LONG)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>

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
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => handleLogin()}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={{padding:10}}>New user</Text>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("Signup")}}>
                <Text style={styles.signupText}>Signup</Text>
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
    signupText: {
        color:'blue',
        padding:10
    }
})

