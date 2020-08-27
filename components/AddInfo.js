import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function AddInfo({ submitHandler }) {
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [location, setlocation] = useState('India');
  const [city, setCity] = useState('city');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new student name..."
        onChangeText={(val) => setname(val)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="new student age..."
        onChangeText={(val) => setage(val)}
        value={age}
      />
      <View style={{ flexDirection: 'row' }}>
        <Picker
          selectedValue={location}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setlocation(itemValue)}
        >
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Pakistan" value="Pakistan" />
          <Picker.Item label="Bangladesh" value="Bangladesh" />
        </Picker>
        {location === 'India' ? (
          <Picker
            selectedValue={location}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item label="Mumbai" value="Mumbai" />
            <Picker.Item label="Nagpur" value="Nagpur" />
            <Picker.Item label="Bangalore" value="Bangalore" />
          </Picker>
        ) : location === 'Pakistan' ? (
          <Picker
            selectedValue={location}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item label="Karachi" value="Karachi" />
            <Picker.Item label="Islamabad" value="Islamabad" />
          </Picker>
        ) : location === 'Bangladesh' ? (
          <Picker
            selectedValue={location}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item label="Bongo" value="Bongo" />
          </Picker>
        ) : null}
      </View>
      <Button color="coral" onPress={() => submitHandler({ name, age, location, city })} title="add Info" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
