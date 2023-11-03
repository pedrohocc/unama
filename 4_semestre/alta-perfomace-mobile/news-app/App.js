import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import { useState, useEffect } from "react";
import CardCustom from "./components/Card/Card";

export default function App() {
  const [pesquisa, setPesquisa] = useState("Cripto");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${pesquisa}&language=pt&page=${pagina}&pageSize=10&sortBy=publishedAt`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "5c7c58c69285476eb604a44636201c7e", //trocar key para funcionar, limite de 100 pesquisas
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na rede");
        }
        return response.json();
      })
      .then((data) => {
        if (data != null) {
          setNoticias(
            data.articles.map((noticia) => {
              if (
                noticia.title !== null &&
                noticia.description !== null &&
                noticia.urlToImage !== null &&
                noticia.url !== null
              ) {
                return (
                  <CardCustom
                    titulo={noticia.title}
                    conteudo={noticia.description}
                    imagem={noticia.urlToImage}
                    url={noticia.url}
                  />
                );
              }
            })
          );
        }
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [pesquisa, pagina]);

  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>
        <Searchbar
          style={styles.barraPesquisar}
          mode="view"
          placeholder="O que deseja pesquisar?"
          onChangeText={(valor) => setPesquisa(valor)}
          value={pesquisa}
        ></Searchbar>
        <View>{noticias}</View>
        <View style={styles.acoes}>
          <Button
            mode="contained"
            onPress={() => {
              if (pagina > 1) {
                setPagina(pagina - 1);
              }
            }}
          >
            Voltar
          </Button>
          <Button mode="contained" onPress={() => {
            setPagina(pagina + 1)
          }}>Proximo</Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#ADD8E6",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  barraPesquisar: {
    marginTop: 20,
  },

  acoes: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
});
