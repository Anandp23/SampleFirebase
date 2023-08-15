import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Main() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={()=>{navigation.navigate('DataFetching')}}
            >
                <Text style={styles.buttonText}>Data Fetching</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text 
                style={styles.buttonText}
                onPress={()=>{navigation.navigate('Login')}}
                >Email Authentication</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>{navigation.navigate('Otp')}}
            >
                <Text style={styles.buttonText}>OTP Authentication</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonStyle: {
        height:40,
        width:'60%',
        backgroundColor:'green',
        borderRadius:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonText: {
        fontSize:20,
        color:'white',

    }
})