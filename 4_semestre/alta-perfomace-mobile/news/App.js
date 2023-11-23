import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardNews from './components/cardNews';
import { ActivityIndicator } from 'react-native-paper';

export default function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  function getNews() {
    setLoading(true);
    fetch('https://codequestpoobackend--willyscampos.repl.co/news')
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      }).catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getNews();
  }, [])

  const renderItem = ({ item }) => ( <CardNews key={item.id} titulo={item.title} conteudo={item.content} />)

  return (
    <View style={styles.container}>
      <FlatList data={news} renderItem={renderItem} key={item => item.id.toString()} onEndReached={getNews} onEndReachedThreshold={0.5}>
      </FlatList>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> :<></>}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
