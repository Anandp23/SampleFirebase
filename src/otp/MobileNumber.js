import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";

export default function MobileNumber(props) {
    const [phoneNumber, setPhoneNumber] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Enter Phone Number</Text>
            <TextInput
                style={styles.inputStyle}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="numeric"
            />
            {/* <TouchableOpacity style={styles.button}
            onPress={()=>props.onSubmit(phoneNumber)}
            >
                <Text style={styles.buttonText}>SIGN IN WITH OTP</Text>
            </TouchableOpacity> */}
            <Button
                title="SIGN IN WITH OTP"
                onPress={() => props.onSubmit(phoneNumber)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputStyle: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    button: {
        height: 30,
        width: '40%',
        backgroundColor: 'green',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    headingText: {
        fontSize: 20,
        color: 'black'
    },
    buttonText: {
        color: 'white'
    }
})