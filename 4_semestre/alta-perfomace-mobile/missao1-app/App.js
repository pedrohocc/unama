import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, useAnimatedValue } from "react-native";
import { buscarErenderizarCidades } from "./Dados";
import { ScrollView } from "react-native-web";

export default function App() {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const cards = await buscarErenderizarCidades();
        setCidades(cards);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    }
    carregarDados();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Casos de covid - Brasil</Text>
      <ScrollView>
        {cidades}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },

  titulo: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
