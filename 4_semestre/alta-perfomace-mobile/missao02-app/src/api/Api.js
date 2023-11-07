import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-paper";

export const buscarERenderizarEstado = async (regiao) => {
  const url =
    "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na rede");
    }
    const data = await response.json();
    const componentesEstado = await Cards(data.infectedByRegion, regiao);
    return componentesEstado;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

const Cards = (dado, regiao) => {
  const cards = dado.map((estado, index) => {
    if (regiao.includes(estado.state)) {
      return (
        <Card key={index} mode="elevated" style={styles.card}>
          <Card.Content style={styles.cardConteudo}>
            <Text style={styles.cardTexto}>
              <Icon source="map-marker" size={20} /> {estado.state}
            </Text>
            <Text style={styles.cardTexto}>
              <Icon source="counter" size={20} /> {estado.count}
            </Text>
          </Card.Content>
        </Card>
      );
    } else {
      return null;
    }
  });

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
