import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {API_KEY} from '@env';
import {getData, getMovieListUrl} from '../services/api';
import {SearchInput} from '../components';
import {MovieCard} from '../components';

const Home = ({navigation}) => {
  const [movieListState, setState] = useState({
    apiMoviesPage: 2,
    loadMoreCounter: 1,
    movieSliceValue: 12,
    moviesArray: [],
  });
  const {
    apiMoviesPage,
    loadMoreCounter,
    movieSliceValue,
    moviesArray,
  } = movieListState;

  const {container, text, movieContainer, item} = styles;

  useEffect(() => {
    if (loadMoreCounter < 2) {
      (async () => {
        const res = await getData(getMovieListUrl(API_KEY));
        setState({
          ...movieListState,
          moviesArray: res.results,
        });
      })();
    }
  });

  return (
    <View style={container}>
      <ScrollView>
        <SearchInput />
        <Text style={text}>What's Popular</Text>
        <View style={movieContainer}>
          {moviesArray.slice(0, movieSliceValue).map((movie) => {
            return (
              <View key={movie.id} style={item}>
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  navigation={navigation}
                />
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
    margin: 5,
    marginBottom: 30,
    width: 110,
    height: 150,
  },
  text: {
    color: '#0B253F',
    fontSize: 25,
    margin: 15,
  },
});

export default Home;
