import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

export default App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInput = input => {
    setEnteredGoal(input);
  };

  const handleButtonPress = () => {
    setGoals(currentGoals => [
      ...currentGoals,
      { value: enteredGoal, key: Math.random().toString() }
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='List a goal'
            onChangeText={handleInput}
            style={styles.inputText}
            value={enteredGoal}
          />
          <Button title='ADD' onPress={handleButtonPress} />
        </View>
        <FlatList
          style={{ width: '100%', padding: 5 }}
          data={goals}
          renderItem={itemData => <Goal goal={itemData.item.value} />}
        ></FlatList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',

    alignItems: 'center'
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginRight: 5
  },
  goalItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10
  }
});

const Goal = ({ goal }) => {
  return (
    <View style={styles.goalItem}>
      <Text>{goal}</Text>
    </View>
  );
};
