import React, { useState } from 'react';
import { View,Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function Search(){

    const [input, setInput] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Feather
                    name="chevron-left"
                    size={22}
                    color="#000"
                />
                <Text style={{fontSize:22}}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchBox}>

                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: Campinas, SP"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.icon}>
                    <Feather
                        name="search"
                        size={22}
                        color="#FFF"
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#E8F0FF',
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 9,
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        padding: 7
    },
    icon: {
        
    }

});