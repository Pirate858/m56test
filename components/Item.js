import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
      <Text>{item.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
