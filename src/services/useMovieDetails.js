import {useEffect, useState} from 'react';
import _ from 'lodash';

import {getData, getSingleMovieUrl, getMovieCreditsUrl} from '../services/api';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const useMovieDetails = (movieId) => {
  const [state, setState] = useState({
    isLoading: true,
    movie: {},
    charachters: [],
    director: '',
    production: [],
  });

  useEffect(() => {
    (async () => {
      await getData(getSingleMovieUrl(movieId)).then((data) => {
        (async () => {
          const resCrew = await getData(getMovieCreditsUrl(movieId));

          const direct = _.filter(resCrew.crew, (crewMember) => {
            return crewMember.job === 'Director';
          });
          const product = _.filter(resCrew.crew, (crewMember) => {
            return crewMember.department === 'Production';
          });

          setState({
            ...state,
            movie: data,
            image: IMAGE_PATH + data.poster_path,
            year: data.release_date.slice(0, 4),
            language: data.original_language.toUpperCase(),
            genre: data.genres[0].name,
            charachters: resCrew.cast.slice(0, 2).map((n) => n.name),
            director: direct[0].name,
            production: product.slice(0, 3).map((n) => n.name),
            isLoading: false,
          });
        })();
      });
    })();
  }, []);

  return {state};
};

export default useMovieDetails;
