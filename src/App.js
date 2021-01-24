import React, { Component } from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import NotConnected from './screens/notConnectedScreen';
import NetInfo from '@react-native-community/netinfo';

class App extends Component {
  state = {
    isConnected: true,
  };
  componentDidMount() {
    NetInfo.fetch().then((state) => {
      this.setState({ isConnected: state?.isConnected ?? false });
    });
  }
  render() {
    const store = createStore(reducer, middleware);
    return (
      <Provider store={store}>
        {this.state.isConnected ? <Router /> : <NotConnected />}
      </Provider>
    );
  }
}

export default App;
