import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
export default function GoalInput(props: any) {

  const [enteredText, setEnteredText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
          style={styles.textInput} 
          placeholder='Aggiungi nuovo obiettivo'
          onChangeText={goalInputHandler}
          value={enteredText}
      />
      <Button 
      title='Aggiungi obiettivo'
      onPress={addGoalHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1
  },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      marginBottom: 8,
      padding: 8
    }
  });