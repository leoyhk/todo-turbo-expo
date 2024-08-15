import { Todo } from "const/types";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

// display only the title for now
type TodoProps = Pick<Todo, "title">;

export function TodoItem(props: TodoProps) {
  const { title } = props;
  const rightSwipe = () => {
    return (
      <View style={style.deleteButton}>
        <Text style={{ color: "#FFF" }}>Delete</Text>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipe} containerStyle={style.container}>
      <Text>{title}</Text>
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
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
