import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MovieListScreen, MovieDetailsScreen} from './src/screens';
import {HeaderImage, HeaderBackImage} from './src/components';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MovieListScreen">
          <Stack.Screen
            options={{
              headerTitle: (props) => <HeaderImage {...props} />,
              cardStyle: {backgroundColor: 'white'},
              headerStyle: {backgroundColor: '#0B253F'},
            }}
            name="MovieListScreen"
            component={MovieListScreen}
          />
          <Stack.Screen
            options={{
              headerBackImage: () => <HeaderBackImage />,
              headerTitle: (props) => <HeaderImage {...props} />,
              headerRight: () => <View />,
              cardStyle: {backgroundColor: 'white'},
              headerStyle: {backgroundColor: '#0B253F'},
              headerBackTitleVisible: false
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
