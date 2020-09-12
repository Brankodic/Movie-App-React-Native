import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SearchInput} from '../components';

const Home = () => {
  const {container, text, movieContainer, item} = styles;
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <View style={container}>
      <ScrollView>
        <SearchInput />
        <Text style={text}>What's Popular</Text>
        <View style={movieContainer}>
          {array.map((key) => {
            return (
              <View key={key} style={item}>
                <Text>{key}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
    color: '#0B253F',
    fontSize: 25,
    margin: 15,
  },
});

export default Home;
