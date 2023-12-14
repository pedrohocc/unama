import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Portal, Text } from 'react-native-paper';
import BoxDialog from './boxDialog';

const CardNews = ({ id, titulo, conteudo, navigation }) => {
  const idNews = id;
  const [visible, setVisible] = React.useState(false);

  function deleteNews() {
    alert('Noticia excluida com sucesso');
    setVisible(false);
  }

  function editNews() {
    navigation.navigate('Edit')
  }

  return (
    <>
      <Card style={styles.container}>
        <Card.Title title={titulo}  titleNumberOfLines={1}/>
        <Card.Content>
          <Text variant="bodyMedium">{conteudo}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button onPress={() => editNews()}>Editar</Button>
          <Button onPress={() => setVisible(true)}>Excluir</Button>
        </Card.Actions>
      </Card>
      {visible && <BoxDialog action={deleteNews}>Deseja excluir a noticia?</BoxDialog>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },
});

export default CardNews;