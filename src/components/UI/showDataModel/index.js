import { View, Text, StyleSheet } from "react-native";

export default function ShowDataModel(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Nome: </Text>
        <Text style={styles.content}>{props.name}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>E-mail: </Text>
        <Text style={styles.content}>{props.email}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Telefone: </Text>
        <Text style={styles.content}>{props.phone}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Idade: </Text>
        <Text style={styles.content}>{props.age}</Text>
      </View>
      <View>
        <Text style={styles.title}>Status: </Text>
        <Text style={styles.content}>{props.type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    flexWrap: "wrap"
  },
  title: {
    fontWeight: "bold",
  },
});
