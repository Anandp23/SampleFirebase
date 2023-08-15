import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";

export default function VarifyCode(props) {
    const [code, setCode] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Enter otp</Text>
            <TextInput
                style={styles.inputStyle}
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
            />
            {/* <TouchableOpacity style={styles.button}
            onPress={()=>props.onSubmit(code)}
            >
                <Text style={styles.buttonText}>CONFIRM OTP</Text>
            </TouchableOpacity> */}
            <Button
                title="CONFIRM OTP"
                onPress={() => props.onSubmit(code)}
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