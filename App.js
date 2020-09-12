import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, MovieDetailsScreen} from './src/screens';
import {HeaderImage} from './src/components';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerTitle: (props) => <HeaderImage {...props} />,
              headerStyle: {backgroundColor: '#0B253F'},
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerTitle: (props) => <HeaderImage {...props} />,
              headerStyle: {backgroundColor: '#0B253F'},
            }}
            name="MovieDetails"
            component={MovieDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
