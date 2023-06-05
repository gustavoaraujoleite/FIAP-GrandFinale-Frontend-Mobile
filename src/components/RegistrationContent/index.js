import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";
import DefaultInputs from "../DefaultInputs";
import { ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { registerUser } from "../../service/registerUser";
import { getUsers } from "../../service/getUsers";

export default function RegistrationContent() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");

  async function registerUserHandler() {
    try {
      const result = await registerUser(
        email,
        Number(age),
        name,
        phone,
        type.toUpperCase()
      );

      setEmail("");
      setPhone("");
      setName("");
      setAge("");
      setType("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Registro</Text>
      </View>
      <DefaultInputs
        placeholder="Nome"
        onChangeText={(data) => setName(data)}
        value={name}
      />
      <DefaultInputs
        placeholder="E-mail"
        type="email-address"
        onChangeText={(data) => setEmail(data)}
        value={email}
      />
      <DefaultInputs
        placeholder="Telefone"
        onChangeText={(data) => setPhone(data)}
        value={phone}
      />
      <DefaultInputs
        placeholder="Idade"
        type="numeric"
        onChangeText={(data) => setAge(data)}
        value={age}
      />
      <DefaultInputs
        placeholder="Estudante ou Professor?"
        onChangeText={(data) => setType(data)}
        value={type}
      />

      <View style={styles.btnContainer}>
        <Button title="Salvar" color="#23ab17" onPress={registerUserHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 42,
    backgroundColor: "rgba(255, 255,255, 0.9)",
  },
  title: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 32,
  },

  btnContainer: {
    marginTop: 26,
  },
  btnContainer: {
    marginTop: 42,
  },
});
