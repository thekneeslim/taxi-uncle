import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';

import 'purecss/build/pure.css'

class App extends Component {
  render() {
    return (
      <div className="background">
        <Page />
      </div>
    );
  }
}

export default App;
