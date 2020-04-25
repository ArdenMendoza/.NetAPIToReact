import React, { Component } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

export default class App extends Component {
  public store!: Store<any>;

  render() {
    return (
      <Provider store={this.store}>
        <div>testing</div>>
      </Provider>
    )
  }
}
