import React from "react";
import { View,StyleSheet,Text, ToastAndroid } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Homescreen() {

    // const route = useRoute();
    // const {email,uid} = route.params
    return(
        <View style={styles.container}>
            {/* <Text style={styles.textStyle}>Email: {email}</Text>
            <Text style={styles.textStyle}>UID: {uid}</Text> */}
            <Text style={styles.textStyle}>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle: {
        color:'black',
        fontSize:20
    }
})