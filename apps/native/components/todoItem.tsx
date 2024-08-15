import { Todo } from "const/types";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";

type TodoProps = {
  todo: Todo;
  deleteAction: (todo: Todo) => void;
};

export function TodoItem(props: TodoProps) {
  const { todo, deleteAction } = props;
  const rightSwipe = () => {
    return (
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => deleteAction(todo)}
      >
        <Text style={{ color: "#FFF" }}>Delete</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipe} containerStyle={style.container}>
      <Text>{todo.title}</Text>
    </Swipeable>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 60,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "grey",
    padding: 8,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    height: "100%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
