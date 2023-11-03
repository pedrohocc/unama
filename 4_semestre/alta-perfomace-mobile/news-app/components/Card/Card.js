import * as React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const CardCustom = (props) => (
  <Card style={styles.container} mode='contained'>
    <Card.Content style={styles.conteudo}>
      <Text style={styles.textoTitulo} variant="titleLarge">{props.titulo}</Text>
      <Text style={styles.textoConteudo} variant="bodyMedium">{props.conteudo}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: `${props.imagem}` }} />
    <Card.Actions>
      <Button onPress={() => {Linking.openURL(`${props.url}`)}}>Ler mais</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 300,
        marginBottom: 20,
        marginTop: 20
    },

    conteudo: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    textoTitulo: {
        marginBottom: 20,
        textAlign: 'center'
    },  

    textoConteudo: {
        maxWidth: 200,
        textAlign: 'center'
    },
})

export default CardCustom;