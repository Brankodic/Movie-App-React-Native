import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const SearchInput = (props) => {
  const [state, setState] = useState({
    inputValue: '',
  });
  const {inputValue} = state;

  const {searchScreenOn, searchScreenOff} = props;

  function handlerInput(value) {
    setState({...state, inputValue: value});
    searchScreenOn();
  }

  return (
    <SearchBar
      onChangeText={(text) => handlerInput(text)}
      onCancel={searchScreenOff}
      value={inputValue}
      platform="ios"
      placeholder="Search"
    />
  );
};

export default SearchInput;
