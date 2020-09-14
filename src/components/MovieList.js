import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import MovieCard from './MovieCard';

const MovieList = (props) => {
  const {moviesArray, loadMore, navigation} = props;
  const {row, movieContainer, item} = styles;

  return (
    <View>
      <FlatList
        numColumns={3}
        contentContainerStyle={movieContainer}
        columnWrapperStyle={row}
        onEndReached={loadMore}
        data={moviesArray}
        keyExtractor={(movie, index) => {
          return index.toString();
        }}
        renderItem={(movie) => {
          return (
            <View style={item}>
              <MovieCard movie={movie.item} navigation={navigation} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  movieContainer: {
    flexDirection: 'column',
  },
  item: {
    margin: 5,
    marginBottom: 30,
    width: 110,
    height: 150,
  },
});
export default MovieList;
