import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TextInput } from 'react-native';
// import nations from './nations';

export default function App() {

  // const [nation, setNation] = useState(nations);
  const [time1, setTime1] = useState({"name": '', "points": '', "gols": ''});
  const [time2, setTime2] = useState({"name": '', "points": '', "gols": ''});
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  function Games() {
    return (
      <View>
        <View style={styles.viewPlacar}>
          <Text>
            Qatar
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setInput1}
            value={input1}
            keyboardType='numeric'
            textAlign='center'
            maxLength={2}
          /> 
          <Text> x </Text>
          <TextInput
            style={styles.input}
            onChangeText={setInput2}
            value={input2}
            keyboardType='numeric'
            textAlign='center'
            maxLength={2}
          />
          <Text>
            Ecuador
          </Text>
        </View>
      </View>
    )
  }

  function alterar() {
    if(input1 !== '' && input2 !== '') {
      if(input1 > input2) {
        setTime1({"name": "Qatar", "gols": input1,  "points": 3});
        setTime2({"name": "Ecuador", "gols": input2, "points": 0});
      } else if(input2 > input1) {
        setTime1({"name": "Qatar", "gols": input1,  "points": 0});
        setTime2({"name": "Ecuador", "gols": input2, "points": 3});
      } else {
        setTime1({"name": "Qatar", "gols": input1,  "points": 1});
        setTime2({"name": "Ecuador", "gols": input2, "points": 1});
      }
    }
  };
  
  const nation = [time1, time2];


  const renderItem = ({ item }) => {
    return (
      <View>
        <Text> {item.name} {item.points} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={nation}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Games />
      </View>
      <Button
        onPress={() => {
          alterar()
        }}
        title='altere a pontuação'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },

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

// https://www.youtube.com/watch?v=UUY3cYUif0Y
