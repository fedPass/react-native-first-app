import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GoalItem(props: { item: string; }) {
  return (
      <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.item}</Text>
      </View>
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