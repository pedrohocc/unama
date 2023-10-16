import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [senha, setSenha] = useState('')

  const verificar = (senha) => {
    const verificacao = senha == 'unama2024' ? "Logado com sucesso" : "Login invalido"
    alert(verificacao)
}

  return (
    <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=996&t=st=1697198200~exp=1697198800~hmac=aea9513af83037e36d17541638ad25d9f5a5213d7138e04c3d997d1b8abd0beb'}} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Login</Text>
          <TextInput style={styles.input} placeholder='Matricula'></TextInput>
          <TextInput style={styles.input} placeholder='Senha' secureTextEntry onChangeText={value => setSenha(value)}></TextInput>
          
          <TouchableOpacity onPress={() => verificar(senha)} style={styles.button}>
            <Text style={styles.textoButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    marginBottom: 20,
    color: '#FFF'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 250,
    height: 50,
    borderColor: '#FFF',
    marginBottom: 30,
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: 'rgba(0,48,73,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 400,
    borderRadius: 30,
    padding: 10
  },

  button: {
    backgroundColor: '#FFF',
    width: 150,
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
