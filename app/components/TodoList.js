import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle, getFormattedDate}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
          getFormattedDate={getFormattedDate}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
