import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BntRegioes from "../helpers/BntRegioes";
import { useNavigation } from "@react-navigation/native";

const InitialScreen = () => {
  const navigation = useNavigation();

  const MudarTela = (regiao) => {
    navigation.navigate("Região", { regiao: regiao });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma região abaixo</Text>
      <View>
        <BntRegioes
          onRegiaoPress={(regiao) => {
            MudarTela(regiao);
          }}
        ></BntRegioes>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },

  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});

export default InitialScreen;
