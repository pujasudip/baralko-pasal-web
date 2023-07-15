import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store'
import Count from './home/count';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count />
      </div>
    </Provider>

  );
}

export default App;
