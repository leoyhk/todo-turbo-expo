import { Todo } from "const/types";
import { StyleSheet, Text, View } from "react-native";

// display only the title for now
type TodoProps = Pick<Todo, "title">;

export function TodoItem(props: TodoProps) {
  const { title } = props;
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
  },
});
