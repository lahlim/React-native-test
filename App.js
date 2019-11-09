import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default App = () => {
  [text, setText] = useState('TAPSAN VANHUSTEN HOITAMIS APPI');
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{text}</Text>
      <Button
        style={{ padding: 20, margin: 20 }}
        title='Hae kahvi seuraa tästä'
        onPress={() => setText('Text changet')}
      />
      <Text />
      <Button
        style={{ padding: 20, margin: 20 }}
        title='Hae olut seuraa tästä'
        onPress={() => setText('Text changet')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
