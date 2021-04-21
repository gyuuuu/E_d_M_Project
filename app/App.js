import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(new Date());

  // const db = SQLite.openDatabase(
  //   {
  //     name: 'expired.db',
  //     createFromLocation: 1,
  //   },
  //   () => {},
  //   error => {
  //     console.log(error);
  //   },
  // );

  // const query = () =>
  //   db.transaction(tx => {
  //     console.log('transaction start');
  //     tx.executeSql('SELECT * FROM expired', [], (tx, results) => {
  //       console.log('Query completed');
  //       const row = results.rows;
  //       for (let i = 0; i < row.length; i++) {
  //         console.log(row.item(i));
  //       }
  //     });
  //   });

  // query();

  const getFormattedDate = date => {
    return moment(date).format('YYYY-MM-DD');
  };

  const addTodo = (text, date) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(),
        textValue: text,
        checked: false,
        date: date,
      },
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>유통기한</Text>
      <View style={styles.card}>
        <TodoInsert date={date} onAddTodo={addTodo} />
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="date"
          locale="ko"
        />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          getFormattedDate={getFormattedDate}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;

// import 'react-native-gesture-handler';

// import * as React from 'react';
// import {Button, View, Text} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import HomeScreen from './pages/HomeScreen';
// import RegisterUser from './pages/RegisterUser';
// import UpdateUser from './pages/UpdateUser';
// import ViewUser from './pages/ViewUser';
// import ViewAllUser from './pages/ViewAllUser';
// import DeleteUser from './pages/DeleteUser';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             title: 'Home', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="View"
//           component={ViewUser}
//           options={{
//             title: 'View User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="ViewAll"
//           component={ViewAllUser}
//           options={{
//             title: 'View Users', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Update"
//           component={UpdateUser}
//           options={{
//             title: 'Update User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterUser}
//           options={{
//             title: 'Register User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Delete"
//           component={DeleteUser}
//           options={{
//             title: 'Delete User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
