import { StatusBar } from "expo-status-bar";
import react from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [nota1, onChangeTextNota1] = react.useState("");
  const [nota2, onChangeTextNota2] = react.useState("");
  const [resultado, alterarResultado] = react.useState("");

  const calcularMedia = () => {
    let status = ''
    fetch(`http://localhost:4000/media/${nota1}/${nota2}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Number(data) >= 7) {
          status = "Aprovado";
        } else {
          status = "Estude mais"
        }
        alterarResultado(`MÉDIA: ${data}\nSTATUS: ${status}`);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alterarResultado("Ocorreu um erro na requisição.");
      });
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.paragrafo}>Calcular Média</Text>

        <Text style={styles.label}>Nota 1:</Text>
        <TextInput
          onChangeText={onChangeTextNota1}
          placeholder="Insira a nota"
          style={styles.input}
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.label}>Nota 2:</Text>
        <TextInput
          onChangeText={onChangeTextNota2}
          placeholder="Insira a nota"
          style={styles.input}
          keyboardType="numeric"
        ></TextInput>

        <Pressable style={styles.button} onPress={calcularMedia}>
          <Text styles={styles.textButton}>Calcular</Text>
        </Pressable>

        <Text style={styles.label}>
          {resultado == "" ? "Aguardando notas..." : resultado}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e81",
    alignItems: "center",
  },
  paragrafo: {
    marginTop: 50,
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 150,
    padding: 10,
  },
  label: {
    fontSize: 19,
    marginTop: 20,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    width: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
