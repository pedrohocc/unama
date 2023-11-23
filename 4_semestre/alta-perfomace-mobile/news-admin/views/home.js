const home = () => {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge' style={styles.titulo}>News Crud</Text>
            <View style={styles.actions}>
                <Button mode='elevated' style={styles.bnt} textColor='white' uppercase={true}>Criar Noticias</Button>
                <Button mode='elevated' style={styles.bnt} textColor='white' uppercase={true}>Editar Noticias</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003049',
      alignItems: 'center',
    },
    titulo: {
      color: 'white',
      marginTop: 50,
    },
    actions: {
      marginTop: 50,
    },
    bnt: {
      margin: 10,
      backgroundColor: '#669bbc',
      width: 200,
      height: 70,
      justifyContent: 'center',
    },
  });
  

export default home;