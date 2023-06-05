import { Pressable, Text, StyleSheet } from "react-native";

export default function Button(props) {
  return (
    <Pressable
      style={[styles.mainContainer, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    paddingVertical: 6,
  },
  title: {
    fontSize: 12,
    color: "#fff",
  },
});
