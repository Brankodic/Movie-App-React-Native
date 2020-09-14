import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

import {getData, getMovieCreditsUrl} from '../services/api';

const MovieCastText = ({movieId}) => {
  const [state, setState] = useState({
    charachters: [],
    director: '',
    production: [],
  });

  const {container, box, boldText} = styles;
  const {charachters, director, production} = state;

  useEffect(() => {
    (async () => {
      const res = await getData(getMovieCreditsUrl(movieId));

      const direct = _.filter(res.crew, (crewMember) => {
        return crewMember.job === 'Director';
      });
      const product = _.filter(res.crew, (crewMember) => {
        return crewMember.department === 'Production';
      });

      setState({
        ...state,
        charachters: res.cast.slice(0, 2).map((n) => n.name),
        director: direct[0].name,
        production: product.slice(0, 3).map((n) => n.name),
      });
    })();
  }, []);

  return (
    <View style={container}>
      {charachters.map((name, key) => {
        return (
          <View style={box} key={key}>
            <Text style={boldText}>{name}</Text>
            <Text>Cast</Text>
          </View>
        );
      })}

      <View style={box}>
        <Text style={boldText}>{director}</Text>
        <Text>Director</Text>
      </View>

      {production.map((name, key) => {
        return (
          <View style={box} key={key}>
            <Text style={boldText}>{name}</Text>
            <Text>Production</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderColor: 'red',
    color: 'red',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    flexGrow: 1,
    fontSize: 55,
    padding: 20,
  },
  boldText: {
    paddingBottom: 3,
    fontWeight: 'bold',
  },
});

export default MovieCastText;
