import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
import {useState} from 'react';
export default function GoalInput(props: any) {
  const [enteredText, setEnteredText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredText);
    setEnteredText('');
  };

  const btnColor = '#459AC2';

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Aggiungi nuovo obiettivo"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Aggiungi obiettivo"
            color={btnColor}
            onPress={addGoalHandler}
          />
          <Button
            title="Chiudi"
            color={btnColor}
            onPress={props.onCloseModal}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    marginHorizontal: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 8,
    padding: 8,
  },
  buttonContainer: {
    gap: 12,
    marginTop: 18,
  },
});
