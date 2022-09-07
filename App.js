import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TextInput } from 'react-native';
import nations from './nations';

export default function App() {

  const [nation, setNation] = useState(nations);
  const [searchValue, setSearchValue] = useState(Number);
  const [nationPoints, setNationPoints] = useState(0);

  function Games() {
    return (
      <Text>
        {nation[0].name} 
      <TextInput
        style={styles.input} 
        value={searchValue}
        onChange={(value) => setSearchValue(value)}
      /> 
       x  
      <TextInput 
        style={{borderColor: 'black'}}
      /> 
        {nation[1].name}
      </Text>
    )
  }

  function alterar() {
    setNationPoints(pontos => {
      return pontos + 1
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text> {item.name} {nationPoints} </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={nation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#363636',
    margin: 30,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
  },
});
 