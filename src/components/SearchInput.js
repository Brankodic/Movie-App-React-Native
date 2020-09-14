import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

import useSearchMovies from '../services/useSearchMovies';

const SearchInput = (props) => {
  const [state, setState] = useState({
    inputValue: '',
  });
  const {inputValue} = state;

  const {searchScreenOn, searchScreenOff, handleSearchQuery} = props;

  const {clearSearchMovies} = useSearchMovies();

  const handlerInput = (value) => {
    setState({...state, inputValue: value});
    searchScreenOn();
    handleSearchQuery(value);
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
