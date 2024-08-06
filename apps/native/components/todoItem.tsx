import { Todo } from "const/types";
import { Text, View } from "react-native";

// display only the title for now
type TodoProps = Pick<Todo, "title">;

export function TodoItem(props: TodoProps) {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
