import { ScrollView, StyleSheet, View, Text } from "react-native";
import { buscarERenderizarEstado, buscarErenderizarCidades } from "../api/Api";
import { useEffect, useState } from "react";
import { Icon } from "react-native-paper";

const DataScreen = ({ route }) => {
  const [estados, setEstados] = useState([]);
  const { regiao } = route.params;

  const regioes = {
    Norte: ["AC", "AP", "PA", "AM", "RO", "RR", "TO"],
    Nordeste: ["AL", "BA", "CE", "MA", "PB", "PI", "PE", "RN", "SE"],
    "Centro-Oeste": ["DF", "GO", "MT", "MS"],
    Sudeste: ["ES", "MG", "SP", "RJ"],
    Sul: ["PR", "RS", "SC"],
  };

  useEffect(() => {
    async function carregarDados() {
      try {
        const cards = await buscarERenderizarEstado(regioes[regiao]);
        setEstados(cards);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    }
    carregarDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Casos de Covid <Icon source="emoticon-sick-outline" size={30}></Icon></Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{estados}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 20
  },
  
});

export default DataScreen;
