import {useState, useEffect} from 'react';

import {API_KEY} from '@env';
import {getData, getMovieListUrl, getMoreMoviesUrl} from './api';

const usePopularMovies = () => {
  const [movieState, setState] = useState({
    isLoading: true,
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
    isLoading,
  } = movieState;

  useEffect(() => {
    if (loadMoreCounter < 2) {
      (async () => {
        const res = await getData(getMovieListUrl(API_KEY));
        setState({
          ...movieState,
          moviesArray: res.results,
        });
      })();
      setState({
        ...movieState,
        isLoading: false,
        loadMoreCounter: loadMoreCounter + 1,
      });
    }
  }, []);

  const loadMoreMovies = () => {
    (async () => {
      const res = await getData(getMoreMoviesUrl(API_KEY, apiMoviesPage));
      setState({
        ...movieState,
        apiMoviesPage: apiMoviesPage + 1,
        loadMoreCounter: loadMoreCounter + 1,
        movieSliceValue: movieSliceValue + 12,
        moviesArray: moviesArray.concat(res.results),
      });
    })();
    setState({
      ...movieState,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 12,
    });
  };

  return {moviesArray, movieState, isLoading, loadMoreMovies};
};

export default usePopularMovies;
