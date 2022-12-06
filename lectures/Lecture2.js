import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function LectureTwo() {
  return (
    <View style={{padding: 20,paddingTop: 50, width: '100%', height: 200, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch'}}>
        <View
            style={{
                backgroundColor: 'red',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>1</Text>
        </View>
        <View
            style={{
                backgroundColor: 'green',
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>2</Text>
        </View>
        <View
            style={{
                backgroundColor: 'blue',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>3</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet

export default LectureTwo