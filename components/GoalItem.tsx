import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Platform } from 'react-native';

export default function GoalItem(this: any, props: any) {
  return (
    // .bind() is a JS func that pre-conf a function for future use,
    // 1° arg is 'this' keyword, 2° arg is first arg of called funct
    <View style={styles.goalItem}>
      {/* android has a dedicate prop tp manage ripple effect, for IOS we need to add custom style */}
      {/* style prop can take an obj or a func, 
      in this case we pass as arg the current press state (with obj destruc we get hold pressed prop */}
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.item.id)}
        android_ripple={{color: '#0F455E'}}
        style={({ pressed }) => (Platform.OS === 'ios' && pressed) && styles.pressedItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#82cbed',
    borderRadius: 8,
    marginBottom: 8,
  },
  goalText: {
    color: '#fff',
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5
  }
});
