import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Item from './components/Item';
import AddInfo from './components/AddInfo';

export default function App() {
  const [student, setStudent] = useState([
    { name: 'S1', key: '1', age: '20', location: 'India' },
    { name: 'S2', key: '2', age: '20', location: 'India' },
    { name: 'S3', key: '3', age: '20', location: 'India' },
  ]);

  const submitHandler = (obj) => {
    setStudent((prevTodos) => {
      return [...prevTodos, { key: Math.random().toString(), name: obj.name, age: obj.age, location: obj.location }];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddInfo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={student} renderItem={({ item }) => <Item item={item} />} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
