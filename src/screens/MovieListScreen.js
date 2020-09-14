import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import useSearchMovies from '../services/useSearchMovies';
import usePopularMovies from '../services/usePopularMovies';
import {SearchInput, MovieList} from '../components';

const MovieListScreen = ({navigation}) => {
  const [state, setState] = useState({
    searchStatus: false,
  });
  const {searchStatus} = state;

  const {isLoading, moviesArray, loadMoreMovies} = usePopularMovies();
  const {
    searchedMoviesArray,
    handleSearchQuery,
    clearSearchMovies,
  } = useSearchMovies();

  const {text, spinnerTextStyle} = styles;

  const handleSearchScreenOn = () => {
    if (!searchStatus) {
      setState({
        ...state,
        searchStatus: true,
      });
    }
  };
  const handleSearchScreenOff = () => {
    clearSearchMovies();
    setState({
      ...state,
      searchStatus: false,
    });
  };

  return (
    <>
      <Spinner
        value={isLoading}
        textContent={'Loading...'}
        textStyle={spinnerTextStyle}
      />
      <SearchInput
        searchScreenOn={handleSearchScreenOn}
        searchScreenOff={handleSearchScreenOff}
        handleSearchQuery={handleSearchQuery}
        clearSearchMovies={clearSearchMovies}
      />

      {searchStatus && (
        <>
          <Text style={text}>Search Results</Text>
          <MovieList
            loadMore={loadMoreMovies}
            moviesArray={searchedMoviesArray}
            navigation={navigation}
          />
        </>
      )}
      {!searchStatus && (
        <>
          <Text style={text}>What's Popular</Text>
          <MovieList
            loadMore={loadMoreMovies}
            moviesArray={moviesArray}
            navigation={navigation}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  text: {
    backgroundColor: '#fff',
    color: '#0B253F',
    fontSize: 25,
    margin: 15,
  },
});

export default MovieListScreen;
