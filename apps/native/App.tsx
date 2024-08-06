import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui/src";
import { useState } from "react";
import { Todo } from "./const/types";
import { TodoItem } from "./components/todoItem";
import "./global.css";
import { TextInput, View } from "react-native";

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
    <View className="flex items-center justify-center h-full w-full gap-y-4">
      <TextInput
        className="border border-black h-10 min-w-80"
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
