import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {API_KEY} from '@env';
import {getData, getMovieListUrl, getMoreMoviesUrl} from '../services/api';
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

  const {container, text, row, movieContainer, item} = styles;

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
  }, []);

  const handleLoadMore = () => {
    (async () => {
      const res = await getData(getMoreMoviesUrl(API_KEY, apiMoviesPage));
      setState({
        ...movieListState,
        moviesArray: moviesArray.concat(res.results),
        apiMoviesPage: apiMoviesPage + 1,
        loadMoreCounter: loadMoreCounter + 1,
        movieSliceValue: movieSliceValue + 12,
      });
    })();
    setState({
      ...movieListState,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 12,
    });
  };

  return (
    <View style={container}>
      <SearchInput />
      <Text style={text}>What's Popular</Text>
      <FlatList
        numColumns={3}
        contentContainerStyle={movieContainer}
        columnWrapperStyle={row}
        onEndReached={handleLoadMore}
        data={moviesArray.slice(0, movieSliceValue)}
        keyExtractor={(movie, index) => {
          return index.toString();
        }}
        renderItem={(movie) => {
          return (
            <View style={item}>
              <MovieCard movie={movie.item} navigation={navigation} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
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
