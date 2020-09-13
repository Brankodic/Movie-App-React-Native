import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

import {API_KEY} from '@env';
import {getData, getMovieListUrl, getMoreMoviesUrl} from '../services/api';
import {SearchInput, MovieList} from '../components';

const MovieListScreen = ({navigation}) => {
  const [state, setState] = useState({
    apiMoviesPage: 2,
    loadMoreCounter: 1,
    movieSliceValue: 12,
    moviesArray: [],
    searchStatus: false,
  });
  const {
    apiMoviesPage,
    loadMoreCounter,
    movieSliceValue,
    moviesArray,
    searchStatus,
  } = state;

  const {text} = styles;

  useEffect(() => {
    if (loadMoreCounter < 2) {
      (async () => {
        const res = await getData(getMovieListUrl(API_KEY));
        setState({
          ...state,
          moviesArray: res.results,
        });
      })();
    }
  }, []);

  const handleLoadMore = () => {
    (async () => {
      const res = await getData(getMoreMoviesUrl(API_KEY, apiMoviesPage));
      setState({
        ...state,
        moviesArray: moviesArray.concat(res.results),
        apiMoviesPage: apiMoviesPage + 1,
        loadMoreCounter: loadMoreCounter + 1,
        movieSliceValue: movieSliceValue + 12,
      });
    })();
    setState({
      ...state,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 12,
    });
  };

  const handleSearchScreenOn = () => {
    if (!searchStatus) {
      setState({
        ...state,
        searchStatus: true,
      });
    }
  };
  const handleSearchScreenOff = () => {
    setState({
      ...state,
      searchStatus: false,
    });
  };

  return (
    <>
      <SearchInput
        searchScreenOn={handleSearchScreenOn}
        searchScreenOff={handleSearchScreenOff}
      />
      {searchStatus && <Text style={text}>Search Results</Text>}
      {!searchStatus && (
        <>
          <Text style={text}>What's Popular</Text>
          <MovieList
            loadMore={handleLoadMore}
            moviesArray={moviesArray}
            movieSliceValue={movieSliceValue}
            navigation={navigation}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#fff',
    color: '#0B253F',
    fontSize: 25,
    margin: 15,
  },
});

export default MovieListScreen;
