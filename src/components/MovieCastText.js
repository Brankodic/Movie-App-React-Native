import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MovieCastText = () => {
  const cast = {
    charachter: ['Đuro Đaković', 'Rade Končar'],
    director: ['Ja Direktor'],
    screenplay: ['Petar Perić', 'Ivan ivić', 'Marko Marić'],
  };
  return (
    <View style={styles.container}>
      {cast.charachter.map((name, key) => {
        return (
          <View style={styles.box} key={key}>
            <Text style={styles.boldText}>{name}</Text>
            <Text>Characther</Text>
          </View>
        );
      })}
      {cast.director.map((name, key) => {
        return (
          <View style={styles.box} key={key}>
            <Text style={styles.boldText}>{name}</Text>
            <Text>Director</Text>
          </View>
        );
      })}
      {cast.screenplay.map((name, key) => {
        return (
          <View style={styles.box} key={key}>
            <Text style={styles.boldText}>{name}</Text>
            <Text>Screenplay</Text>
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
