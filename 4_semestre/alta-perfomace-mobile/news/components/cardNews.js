import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const CardNews = ({titulo, conteudo}) => (
  <Card style={styles.container}>
    <Card.Title title={titulo} />
    <Card.Content>
      <Text variant="bodyMedium">{conteudo}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },
});

export default CardNews;