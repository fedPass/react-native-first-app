import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
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

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.img}/>
        <TextInput
          style={styles.textInput}
          placeholder="Aggiungi nuovo obiettivo"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Aggiungi obiettivo"
            color="#459AC2"
            onPress={addGoalHandler}
          />
          <Button
            title="Chiudi"
            color="#D34972"
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
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#133F53'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  buttonContainer: {
    gap: 12,
    marginTop: 18,
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    marginHorizontal: 'auto'
  }
});
