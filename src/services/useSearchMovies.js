import {useState} from 'react';
import {debounce} from 'lodash';

import {API_KEY} from '@env';
import {getData, getSearchMoviesUrl} from './api';

const usePopularMovies = () => {
  const [searchMovieState, setState] = useState({
    searchedMoviesArray,
  });

  const {searchedMoviesArray} = searchMovieState;

  console.log(searchedMoviesArray);

  const handleSearchQuery = (value) => {
    if (value.length > 2) {
      const handleChange = debounce((text) => {
        loadSearchMovies(text);
      }, 500);
      handleChange(value);
    } else {
      setState({
        ...searchMovieState,
        searchedMoviesArray: undefined,
      });
    }
  };

  const clearSearchMovies = () => {
    setState({
      ...searchMovieState,
      searchedMovieArray: undefined,
    });
  };

  const loadSearchMovies = (value) => {
    (async () => {
      const res = await getData(getSearchMoviesUrl(API_KEY, value));
      setState({
        ...searchMovieState,
        searchedMoviesArray: res.results.slice(0, 20),
      });
    })();
  };

  return {
    searchedMoviesArray,
    loadSearchMovies,
    handleSearchQuery,
    clearSearchMovies,
  };
};

export default usePopularMovies;
