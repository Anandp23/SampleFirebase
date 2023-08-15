import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import auth from '@react-native-firebase/auth';

import { useNavigation } from "@react-navigation/native";

export default function MobileLogin() {
    const [confirm, setConfirm] = useState(null);
    const [mobileNumber, setMobileNumber] = useState('');

    const navigation = useNavigation();

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const confirmCode = async () => {
        try {
            const res = await confirm.confirm(code);

            console.log(res);
            navigation.navigate('Home')
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    value={mobileNumber}
                    onChangeText={text => setMobileNumber(text)}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => signInWithPhoneNumber('+91' + mobileNumber)}
                    
                >
                    <Text style={{color:'white'}}>Sign In With OTP</Text>
                </TouchableOpacity>
            </View>

        );
    }



    return (
        <View style={styles.container}>
            <TextInput
                value={code}
                onChangeText={text => setCode(text)}
                style={styles.inputStyle}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => confirmCode()}
            >
                <Text style={{color:'white'}}>Confirm Code</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },

    button: {
        height: 40,
        width: '40%',
        backgroundColor: 'green',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
})