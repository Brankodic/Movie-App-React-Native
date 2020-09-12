import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {MovieCastText} from '../components';

const MovieDetailsScreen = () => {
  const img = {
    uri:
      'https://m.media-amazon.com/images/M/MV5BZmJkMTg5ZDMtODk4Ni00MzQyLTk0MjctNDI5OTc5MTExZDFmXkEyXkFqcGdeQXVyNDQ2NTUwODc@._V1_.jpg',
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <View style={styles.imgContainer}>
          <Text style={styles.title}>
            Hackerman
            <Text style={(styles.colorWhite, styles.year)}>(2018)</Text>
          </Text>
          <Text style={styles.colorWhite}>24/05/2018 (Poland)</Text>
          <Text style={styles.colorWhite}>
            Short, Action <Text style={styles.boldText}>1h 3m</Text>
          </Text>
        </View>
      </ImageBackground>
      <Text style={styles.overviewTitle}>Overview</Text>
      <Text style={styles.overview}>
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
  image: {
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
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30,
  },
  year: {
    fontWeight: 'normal',
  },
  overviewTitle: {
    padding: 12,
    paddingBottom: 0,
    color: '#0B253F',
    fontSize: 25,
  },
  overview: {
    padding: 12,
  },
});

export default MovieDetailsScreen;
