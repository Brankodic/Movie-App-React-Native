import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchInput = () => {
  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      cancelIcon
      round
      lightTheme
      placeholder="Search"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 15,
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    backgroundColor: '#eee',
  },
});

export default SearchInput;
