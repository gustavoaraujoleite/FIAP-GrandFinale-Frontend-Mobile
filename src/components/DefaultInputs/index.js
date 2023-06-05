import { Text, TextInput, View, StyleSheet } from "react-native";

export default function DefaultInputs(props) {
  return (
    <View style={styles.mainContainer}>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.type}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: 200,
    marginVertical: 16,
  },
  title: {
    fontSize: 14,
    color: "#999",
  },
  input: {
    borderWidth: 1,
    borderColor: "#111",
    marginTop: 4,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
});
