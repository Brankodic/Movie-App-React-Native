import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCard = (props) => {
  const {movie, navigation} = props;
  const imageUrl = IMAGE_PATH + movie.poster_path;

  return (
    <TouchableOpacity
      key={movie.id}
      style={styles.img}
      title="Go to Details"
      onPress={() => navigation.navigate('MovieDetails')}>
      <Image
        style={styles.img}
        source={{
          uri: imageUrl,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});
export default MovieCard;
