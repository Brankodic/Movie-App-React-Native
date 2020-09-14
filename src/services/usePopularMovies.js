import {useState, useEffect} from 'react';

import {API_KEY} from '@env';
import {getData, getMovieListUrl, getMoreMoviesUrl} from './api';

const usePopularMovies = () => {
  const [movies, setMovies] = useState();

  const [movieState, setState] = useState({
    isLoading: true,
    apiMoviesPage: 2,
    loadMoreCounter: 1,
    movieSliceValue: 12,
    searchStatus: false,
  });

  const {
    apiMoviesPage,
    loadMoreCounter,
    movieSliceValue,
    isLoading,
  } = movieState;
  console.log(movies);
  console.log(loadMoreCounter);

  useEffect(() => {
    if (loadMoreCounter < 2) {
      (async () => {
        const res = await getData(getMovieListUrl(API_KEY));
        setMovies(res.results);
      })();
      setState({
        ...movieState,
        isLoading: false,
      });
    }
  }, []);

  const loadMoreMovies = () => {
    (async () => {
      const res = await getData(getMoreMoviesUrl(API_KEY, apiMoviesPage));
      setMovies(...movies, movies.concat(res.results));
      setState({
        ...movieState,
        apiMoviesPage: apiMoviesPage + 1,
        loadMoreCounter: loadMoreCounter + 1,
        movieSliceValue: movieSliceValue + 12,
      });
    })();
    setState({
      ...movieState,
      loadMoreCounter: loadMoreCounter + 1,
      movieSliceValue: movieSliceValue + 12,
    });
  };

  return [movies, movieState, isLoading, loadMoreMovies];
};

export default usePopularMovies;
