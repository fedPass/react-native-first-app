import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(this: any, props: any) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.item.id)}>
      <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#82cbed',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  goalText: {
    color: '#fff'
  }
});