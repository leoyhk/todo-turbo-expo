import { Todo } from "const/types";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

// display only the title for now
type TodoProps = Pick<Todo, "title">;

export function TodoItem(props: TodoProps) {
  const { title } = props;
  return (
    <View style={style.container}>
      <Text>{title}</Text>
    </View>
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
});
