import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import { StatusBar } from 'expo-status-bar';

function LectureOne() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalText = (enterdGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterdGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalText = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((deleteGoal) => deleteGoal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color={'#e50acc'}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          addGoal={addGoalText}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  deleteText={deleteGoalText}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 3,
  },
});

export default LectureOne;
