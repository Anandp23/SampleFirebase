import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList } from "react-native";
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

export default function App() {
    const [myData, setMyData] = useState(null);
    const [inputTextValue, setInputTextValue] = useState(null);
    const [list, setList] = useState(null);
    const [isUpdateData, setIsUpdateData] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    useEffect(() => {
        getDatabase();

    }, [])

    const getDatabase = async () => {
        try {
            const dataRef = database().ref('users');
            dataRef.on('value', snapshot => {
                const tempData = snapshot.val();
                if (tempData !== null) {
                    setList(Object.values(tempData));
                } else {
                    setList([]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    

    const handleAddData = async () => {
        try {
            if (inputTextValue.length > 0) {
                const index = list.length;
                const response = await database().ref(`users/${index}`).set({
                    value: inputTextValue,
                });
                console.log(response);
                setInputTextValue('');
            } else
                alert("Enter any data...")
                
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateData = async () => {
        try {
            if (inputTextValue.length > 0) {
                const response = await database().ref(`users/${selectedCardIndex}`).update({
                    value: inputTextValue,
                })
                console.log(response);
                setInputTextValue('');
                setIsUpdateData(false);
            } else
                alert("Enter any data")
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdatePress = (updateIndex, cardValue) => {
        try {
            setSelectedCardIndex(updateIndex)

            setIsUpdateData(true);
            setInputTextValue(cardValue);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteData = async (updateIndex) => {
        try {
            const response = await database().ref(`users/${updateIndex}`).remove();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.container}>

            <TextInput
                style={styles.inputBoxStyle}
                placeholder="Enter anything..."
                value={inputTextValue}
                onChangeText={value => setInputTextValue(value)}
            />
            {
                !isUpdateData ? (
                    <TouchableOpacity style={styles.addButton}
                        onPress={() => handleAddData()}>
                        <Text style={styles.buttonText}>ADD TO DATABASE</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.addButton}
                        onPress={() => handleUpdateData()}>
                        <Text style={styles.buttonText}>UPDATE DATABASE</Text>
                    </TouchableOpacity>
                )
            }
            <View style={styles.cardContainer}>

                <FlatList data={list}
                
                    renderItem={(item) => {
                        const updateIndex = item.index;
                        if (item.item !== null) {
                            return (
                                
                                    
                                    <View style={styles.card}>
                                    <View style={styles.textView}>
                                        <Text style={{ color: 'black' }}>{item.item.value}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.updateButton}
                                        onPress={() => handleUpdatePress(updateIndex, item.item.value)}>
                                        <Text style={{ color: 'white' }}>UPDATE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.deleteButton}
                                    
                                        onPress={() => deleteData(updateIndex)}
                                        >
                                        <Text style={{ color: 'white' }}>DELETE</Text>
                                    </TouchableOpacity>
                                </View>
                            
                            )
                            
                    } }}/>
            </View>
        </View>
    )
}

const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 50
    },
    inputBoxStyle: {
        width: width - 30,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: 10
    },

    addButton: {
        width: width - 200,
        height: 30,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },

    addButton: {
        width: width - 200,
        height: 30,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: "bold"
    },

    cardContainer: {
        marginVertical: 20,

    },

    card: {
        backgroundColor: 'white',
        width: width - 40,
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        margin: 10
    },

    textView: {
        width: width - 300
    },

    updateButton: {
        height: 25,
        width: 100,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10
    },
    deleteButton: {
        height: 25,
        width: 100,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginLeft: 10
    },



});

