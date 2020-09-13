import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';

import {API_KEY} from '@env';
import {getData, getMovieCreditsUrl} from '../services/api';

const MovieCastText = ({movieId}) => {
  const [state, setState] = useState({
    charachters: ['name', 'name'],
    director: 'name',
    production: ['name'],
  });

  const cast = {
    charachter: ['Đuro Đaković', 'Rade Končar'],
    director: ['Ja Direktor'],
    screenplay: ['Petar Perić', 'Ivan ivić', 'Marko Marić'],
  };

  useEffect(() => {
    (async () => {
      const res = await getData(getMovieCreditsUrl(API_KEY, movieId));
      const directors = _.filter(res.crew, (crewMember) => {
        return crewMember.job === 'Director';
      });
      const production = _.filter(res.crew, (crewMember) => {
        return crewMember.department === 'Production';
      });

      setState({
        ...state,
        charachters: res.cast.slice(0, 2).map((n) => n.name),
        director: directors[0].name,
        production: production.slice(0, 3).map((n) => n.name),
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {state.charachters.map((name, key) => {
        return (
          <View style={styles.box} key={key}>
            <Text style={styles.boldText}>{name}</Text>
            <Text>Characther</Text>
          </View>
        );
      })}

      <View style={styles.box}>
        <Text style={styles.boldText}>{state.director}</Text>
        <Text>Director</Text>
      </View>

      {state.production.map((name, key) => {
        return (
          <View style={styles.box} key={key}>
            <Text style={styles.boldText}>{name}</Text>
            <Text>Production</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MovieCastText;

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
    fontWeight: 'bold',
  },
});
