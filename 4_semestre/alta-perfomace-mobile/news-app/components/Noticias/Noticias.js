import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import CardCustom from "../Card/Card";

const Noticias = (props) => {
  const [texto, setTexto] = useState(props.texto)
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${texto}&language=pt&page=1&pageSize=10&sortBy=publishedAt`,
      {
        method: "GET",
        headers: {
          "Authorization": "be2c678b0ee342eb8c9dab0f075b91eb",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na rede");
        }
        return response.json();
      })
      .then((data) => {
        setNoticias(
          data.articles.map((noticia) => {
            if(noticia.title !== null && noticia.description !== null && noticia.urlToImage !== null && noticia.url !== null) {
                return <CardCustom titulo={noticia.title} conteudo={noticia.description} imagem={noticia.urlToImage} url={noticia.url}/>
            }
      })
        );
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [texto]);

  return <div>{noticias}</div>;
};

const styles = StyleSheet.create({});

export default Noticias;
