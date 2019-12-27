import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import IndexScreen from './screens/index-screen';
import SearchScreen from './screens/search-screen';
import AdvancedDetailScreen from './screens/advanced-detail-screen';
import store from './store';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

const StackNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Search: SearchScreen,
    Detail: AdvancedDetailScreen
  },
  {
    initialRouteName: "Index",
    headerMode: "none"
  }
)
const Routes = createAppContainer(StackNavigator)