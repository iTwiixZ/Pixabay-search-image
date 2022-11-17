import {ScrollView, View, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Images from './components/Images';
import axios from 'axios';
const App = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 5,
      justifyContent: 'space-between',
    },
    containerSearch: {
      padding: 10,
    },
    searchBar: {
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 15,
      padding: 10,
    },
  });
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://pixabay.com/api/?key=31343646-a4611426655656abb0482411f&q=landscape&image_type=photo',
      )
      .then(res => setData(res.data.hits));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=31343646-a4611426655656abb0482411f&q=${search}&safesearch=true&per_page=40&image_type=photo`,
      )
      .then(res => setData(res.data.hits));
  }, [search]);

  return (
    <ScrollView>
      <View>
        <Header />
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Image..."
            placeholderTextColor="black"
            allowFontScaling={true}
            autoCorrect={true}
            value={search}
            onChangeText={search => setSearch(search)}
          />
        </View>
        <View style={styles.container}>
          {data.map(img => (
            <Images key={img.id} img={img} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
