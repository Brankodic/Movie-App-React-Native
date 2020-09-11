import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchInput} from '../components';

const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View style={styles.container}>
      <SearchInput />
      <Text style={styles.text}>What's Popular</Text>
      <View style={styles.movieContainer}>
        {array.map((key) => {
          return (
            <View key={key} style={styles.item}>
              <Text>{key}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  movieContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 20,
    margin: 5,
    marginBottom: 30,
    width: 110,
    height: 150,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red',
    fontSize: 10,
  },
  text: {
    fontSize: 25,
    margin: 15,
  },
});

export default Home;
