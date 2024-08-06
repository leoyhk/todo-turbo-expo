import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui/src";
import { useState } from "react";
import { Todo } from "const/types";
import { TodoItem } from "./components/todoItem";

export default function Native() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState("");

  const addTodo = () => {
    //validates input
    if (newTodoName === "" || !newTodoName) {
      return;
    }

    //shape todo
    const newTodo = {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: newTodoName,
      completeStatus: false,
      remarks: "",
    };

    //add todo at the top of the list
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);

    //reset input
    setNewTodoName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} />
      <TextInput
        style={styles.input}
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.nativeEvent.text)}
      />
      <Button
        onClick={() => {
          addTodo();
        }}
        text="Add Todo"
      />
      {todos.map((todo) => (
        <TodoItem title={todo.title} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  input: {
    height: 40,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
