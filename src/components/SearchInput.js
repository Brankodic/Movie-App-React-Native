import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const SearchInput = (props) => {
  const [state, setState] = useState({
    inputValue: '',
  });
  const {inputValue} = state;

  const {
    searchScreenOn,
    searchScreenOff,
    handleSearchQuery,
    clearSearchMovies,
  } = props;

  const handlerInput = (value) => {
    setState({...state, inputValue: value});
    searchScreenOn();
    handleSearchQuery(inputValue);
  };
  const handlerClear = () => {
    clearSearchMovies();
    setState({...state, inputValue: ''});
  };

  return (
    <SearchBar
      onChangeText={(text) => handlerInput(text)}
      onClear={handlerClear}
      onCancel={searchScreenOff}
      value={inputValue}
      platform="ios"
      placeholder="Search"
    />
  );
};

export default SearchInput;
