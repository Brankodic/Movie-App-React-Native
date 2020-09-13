import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import {API_KEY} from '@env';
import {getData, getSingleMovieUrl} from '../services/api';
import {MovieCastText} from '../components';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsScreen = ({route}) => {
  const [state, setState] = useState({
    movie: {},
  });
  const {movie, image, year, genre, language} = state;
  const {overview, title, release_date, runtime} = movie;

  const {
    container,
    imageStyle,
    imgContainer,
    titleStyle,
    yearStyle,
    colorWhite,
    boldText,
    overviewTitle,
    overviewStyle,
  } = styles;

  useEffect(() => {
    (async () => {
      const res = await getData(
        getSingleMovieUrl(API_KEY, route.params.paramName),
      );
      setState({
        ...state,
        movie: res,
        image: IMAGE_PATH + res.poster_path,
        year: res.release_date.slice(0, 4),
        language: res.original_language.toUpperCase(),
        genre: res.genres[0].name,
      });
    })();
  }, []);

  console.log(movie);

  return (
    <View style={container}>
      <ImageBackground source={{uri: image}} style={imageStyle}>
        <View style={imgContainer}>
          <Text style={titleStyle}>
            {title}
            <Text style={(colorWhite, yearStyle)}>({year})</Text>
          </Text>
          <Text style={colorWhite}>
            {release_date} ({language})
          </Text>
          <Text style={colorWhite}>
            {genre}
            <Text style={boldText}> {runtime}m</Text>
          </Text>
        </View>
      </ImageBackground>
      <Text style={overviewTitle}>Overview</Text>
      <Text style={overviewStyle}>{overview}</Text>
      <MovieCastText movieId={route.params.paramName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    flexDirection: 'column',
    flex: 4 / 5,
  },
  imgContainer: {
    position: 'absolute',
    bottom: '2%',
    marginLeft: 15,
  },
  colorWhite: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30,
  },
  yearStyle: {
    fontWeight: 'normal',
  },
  overviewTitle: {
    padding: 12,
    paddingBottom: 0,
    color: '#0B253F',
    fontSize: 25,
  },
  overviewStyle: {
    padding: 12,
  },
});

export default MovieDetailsScreen;
