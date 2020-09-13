import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import {API_KEY} from '@env';
import {getData, getSingleMovieUrl} from '../services/api';
import {MovieCastText} from '../components';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsScreen = ({route}) => {
  const [state, setState] = useState({
    movie: {},
    image: undefined,
  });
  const {movie, image} = state;
  const {overview} = movie;

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
      });
    })();
  }, []);

  console.log(movie);
  return (
    <View style={container}>
      <ImageBackground source={{uri: image}} style={imageStyle}>
        <View style={imgContainer}>
          <Text style={titleStyle}>
            Hackerman
            <Text style={(colorWhite, yearStyle)}>(2018)</Text>
          </Text>
          <Text style={colorWhite}>24/05/2018 (Poland)</Text>
          <Text style={colorWhite}>
            Short, Action <Text style={boldText}>1h 3m</Text>
          </Text>
        </View>
      </ImageBackground>
      <Text style={overviewTitle}>Overview</Text>
      <Text style={overviewStyle}>
        [Error: TransformError SyntaxError:
        C:\Users\Srki\Desktop\Movie-App-React-Native\src\screens\MovieDetailsScreen.js:
        Unexpected token, expected "," (36:4)[Error: TransformError SyntaxError:
        C:\Users\Srki\Desktop\Movie-App-React-Native\src\screens\MovieDetailsScreen.js:
        Unexpected token, expected "," (42:12)
      </Text>
      <MovieCastText />
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
