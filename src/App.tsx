import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store'
import Count from './home/count';
import { AboutUs } from './home/about-us';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count />
      </div>
      <AboutUs />
    </Provider>

  );
}

export default App;
