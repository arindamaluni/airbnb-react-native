import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

const InputComponent = (text, helpText, counter, stateHandler) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={{fontWeight: 'bold'}}> {text} </Text>
        <Text style={{color: '#8d8d8d'}}> {helpText} </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          onPress={() => stateHandler((old) => (old > 0 ? old - 1 : 0))}
          style={styles.button}>
          <Text>-</Text>
        </Pressable>
        <Text style={{marginHorizontal: 20, fontSize: 16}}>{counter}</Text>
        <Pressable
          onPress={() => stateHandler((old) => old + 1)}
          style={styles.button}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const GuestScreen = () => {
  const navigator = useNavigation();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        {InputComponent('Adult', 'Age 13 or above', adultCount, setAdultCount)}
        {InputComponent('Children', 'Age 2 - 12', childCount, setChildCount)}
        {InputComponent('Infants', 'Under 2', infantCount, setInfantCount)}
      </View>

      <Pressable
        onPress={() => navigator.navigate('Home')}
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
