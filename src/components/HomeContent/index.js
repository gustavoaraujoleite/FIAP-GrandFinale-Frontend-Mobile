import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";

export default function HomeContent() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Seja muito bem vindo(a) ao HealthTech</Text>
      <Text style={styles.subtitle}>
        Clique no botão abaixo para se registrar
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="Registrar-se"
          color="#e7504d"
          onPress={() => navigation.navigate("REGISTRO")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    padding: 16,
    backgroundColor: "rgba(255, 255,255, 0.7)",
  },
  title: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
  },
  subtitle: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
  },
  btnContainer: {
    marginTop: 26,
  },
});
