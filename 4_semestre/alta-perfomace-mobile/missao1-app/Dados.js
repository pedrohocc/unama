import React from "react";
import { Card, Icon, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export const buscarErenderizarCidades = async () => {
  const url =
    "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na rede");
    }
    const data = await response.json();
    const componentesCidades = await Cards(data.infectedByRegion);
    return componentesCidades;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

const Cards = (dado) => {
  const cards = dado.map((cidade, index) => (
    <Card key={index} mode="elevated" style={styles.card}>
      <Card.Content style={styles.cardConteudo}>
        <Text style={styles.cardTexto}>
          <Icon source="map-marker" size={20} /> {cidade.state}
        </Text>
        <Text style={styles.cardTexto}>
          <Icon source="counter" size={20} /> {cidade.count}
        </Text>
      </Card.Content>
    </Card>
  ));

  return cards;
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginBottom: 20,
    marginTop: 20,
  },

  cardConteudo: {
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cardTexto: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
