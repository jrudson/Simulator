import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Games = () => {
    
    const [input2, setInput2] = useState('');
    const [input1, setInput1] = useState('');
    
    return (
        <View>
            <View style={styles.viewPlacar}>
                <Text>Qatar</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => {setInput1}}
                    value={input1}
                    keyboardType='numeric'
                    textAlign="center"
                    maxLength={2}
                />
                <Text> x </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={() => {setInput2}}
                    value={input2}
                    keyboardType='numeric'
                    textAlign="center"
                    maxLength={2}
                />
                <Text>Ecuador</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        margin: 5,
        borderWidth: 1,
        padding: 2
    },

    viewPlacar: {
        flexDirection: 'row',
    }
});

export default Games;
