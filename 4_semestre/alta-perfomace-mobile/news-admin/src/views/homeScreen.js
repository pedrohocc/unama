import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CardNews from "../components/cardNews";
import { Button } from "react-native-paper";
import { ApiNews } from "../api/ApiNews";

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  function setHeader() {
    navigation.setOptions({
      headerRight: () => (
        <Button mode="contained" style={styles.bntPlus} onPress={() => navigation.navigate('Add')}>Adicionar</Button>
      ),
    })
  }

  async function getNews() {
    const api = new ApiNews();
    const data =  await api.getNews();
    setNews(data);
  }

  useEffect(() => {
    setHeader();
    getNews();
  }, [navigation])

  const renderItem = ({ item }) => (<CardNews navigation={navigation} id={item.id} titulo={item.title} conteudo={item.content} />)

  return (
    <View>
      <FlatList data={news} renderItem={renderItem} keyExtractor={item => item.id.toString()} onEndReached={getNews} onEndReachedThreshold={1} />
    </View>
  )
}

const styles = StyleSheet.create({
  bntPlus: {
    marginRight: 10,
  }
})

export default HomeScreen;