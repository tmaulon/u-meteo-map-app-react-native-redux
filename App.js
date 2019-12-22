import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import store from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    );
  }
}
