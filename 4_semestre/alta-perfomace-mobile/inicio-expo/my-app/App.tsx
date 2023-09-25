import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cat from './componentes/Cat';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Olá, meu nome é Pedro!!</Text>
        <Cat name='pedros'></Cat>
        <StatusBar style="auto" /> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: '#ffff',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white'
  }
});
