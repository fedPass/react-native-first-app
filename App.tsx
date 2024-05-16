/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  StatusBar
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [courseGoals, setCourseGoals] = useState<{text: string; id: string}[]>(
    [],
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredText, id: Math.random().toString()},
    ]);
    setIsModalVisible(false);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar barStyle='light-content'/>
      <View style={styles.appContainer}>
        <Button
          title="Aggiungi nuovo"
          color="#459AC2"
          onPress={() => setIsModalVisible(true)}
        />
        <GoalInput 
          onAddGoal={addGoalHandler} 
          isModalVisible={isModalVisible} 
          onCloseModal={closeModal}/>
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
            renderItem={itemData => {
              return (
                <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
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
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#133F53'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 18
  },
});

export default App;
