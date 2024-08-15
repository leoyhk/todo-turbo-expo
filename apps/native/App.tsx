import { useState } from "react";
import { Todo } from "./const/types";
import "./global.css";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui/src";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TodoItem } from "./components/todoItem";
import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

  const deleteTodo = (item: Todo) => {
    const newTodos = todos.filter((todo) => todo !== item);
    setTodos(newTodos);
  };

  const [todo, setTodo] = useState([]);
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
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
      </View>
      <View style={{ height: "60%", width: "100%" }}>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 8,
          }}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem todo={item} deleteAction={deleteTodo} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 10,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
  input: {
    padding: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    width: "60%",
    height: 40,
  },
});
