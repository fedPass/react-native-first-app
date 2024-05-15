/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [enteredText, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState<{text: string; id: string}[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredText(enteredText);
  }
  
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredText, id: Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Aggiungi nuovo obiettivo'
          onChangeText={goalInputHandler}
        />
        <Button 
          title='Aggiungi obiettivo'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {/* insert <View> inside .map() to correct IOS style IOS */}
        {/* ScrollView is better for text content, because it renders all data together, and it's not good for long list of data */}
        {/* <ScrollView>
          {courseGoals.map((goal) => 
          <View style={styles.goalItem} key={Math.random()}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>)}
        </ScrollView> */}
        {/* FlatList instead renders only the element visible on screen. It doesn't need .map(). 
        If it has a property 'key' unique it doesn't need another, otherwise we can use keyExtractor prop */}
        <FlatList 
          data={courseGoals} 
          renderItem={(x) => {return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{x.item.text}</Text>
            </View>
          )}}
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
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
  },
  goalsContainer: {
    flex: 5
  },
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

export default App;
