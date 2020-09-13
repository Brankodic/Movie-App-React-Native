import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const SearchInput = (props) => {
  const [state, setState] = useState({
    value: '',
  });

  function handlerInput(value) {
    setState({...state, value: value});
    props.searchOn();
  }
  return (
    <SearchBar
      onChangeText={(text) => handlerInput(text)}
      onCancel={props.searchOff}
      value={state.value}
      platform="ios"
      lightTheme
      placeholder="Search"
    />
  );
};

export default SearchInput;
