import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../service/getUsers";
import ShowDataModel from "../UI/showDataModel";
export default function ResearchContent() {
  const [data, setData] = useState([]);
  const fetchdata = useCallback(async () => {
    try {
      const result = await getUsers();
      setData((prevData) => result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Registros</Text>
      </View>
      <View style={styles.dataOuterContainer}>
        {data.length > 1 ? (
          data.map((element) => {
            return (
              <View style={styles.dataContainer} key={element.id}>
                <ShowDataModel
                  name={element.nome}
                  email={element.email}
                  phone={element.telefone}
                  age={element.idade}
                  type={element.tipo}
                />
              </View>
            );
          })
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum dado registrado</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 32,
    fontWeight: "bold",
  },

  btnContainer: {
    marginTop: 26,
  },
  btnContainer: {
    marginTop: 42,
  },
  dataOuterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dataContainer: {
    backgroundColor: "#fefefe",
    width: "46%",
    marginHorizontal: 4,
    marginVertical: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#333",
  },
  emptyContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    paddingVertical: 12,
    borderRadius: 4
  },
  emptyText: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
});
