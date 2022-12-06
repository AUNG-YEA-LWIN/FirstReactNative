import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, deleteText, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={deleteText.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#e50acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

export default GoalItem;
