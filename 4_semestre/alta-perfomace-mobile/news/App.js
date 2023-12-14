import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList,  StyleSheet,  View } from 'react-native';
import CardNews from './components/cardNews';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [news, setNews] = useState([])
  const [newsID, setNewsID] = useState('')
  function getNews() {
    let url = ''
    if (newsID == '') {
      url = `https://codequestpoobackend.willyscampos.repl.co/news`
    } else {
      url = `https://codequestpoobackend.willyscampos.repl.co/news/${newsID}`
    }

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data != null) {
          setNews(data);
        }
      }).catch(err => {
        console.log(err);
        setNews({ title: 'Ops!', content: 'Não Achamos uma noticia com esse ID' });
      });
  }
  useEffect(() => {
    getNews();
  }, [newsID])
  const renderItem = ({ item }) => (<CardNews titulo={item.title} conteudo={item.content} />)
  return (
    <View style={styles.container}>
      <Searchbar placeholder='Digite um ID' onChangeText={id => setNewsID(id)} value={newsID} style={styles.searchBar}></Searchbar>
      {newsID == '' ? <FlatList data={news} renderItem={renderItem} keyExtractor={item => item.id.toString()} onEndReached={getNews} onEndReachedThreshold={1}>
      </FlatList> : <CardNews titulo={news.title} conteudo={news.content} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  searchBar: {
    marginTop: 10,
  }
});
