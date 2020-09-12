import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const MovieCard = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.img}
      title="Go to Details"
      onPress={() => navigation.navigate('MovieDetails')}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://images-na.ssl-images-amazon.com/images/I/71tUSFn3W0L._AC_SY879_.jpg',
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
