import * as React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Page from './pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
          <Page/>
      </Router>
    );
  }
}

export default App;
