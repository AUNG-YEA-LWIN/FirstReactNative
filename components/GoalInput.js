import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

const GoalInput = ({addGoal, visible , onCancel}) => {
  const [enterdGoalText, setEnteredGoalText] = useState('');

  const goalChangeText = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalText = () => {
    addGoal(enterdGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}  />
      <TextInput
        style={styles.inputText}
        placeholder="Your course goal!"
        onChangeText={goalChangeText}
        value={enterdGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalText} color="#b180f0" />
        </View>
        <View style={styles.button}>
          <Button title='Cancel' onPress={onCancel} color="#d241fa" />
        </View>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },  
  inputText: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});

export default GoalInput;
