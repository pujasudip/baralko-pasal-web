import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store'
import Count from './home/count';
import { AboutUs } from './home/about-us';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Count />
        </div>
        <AboutUs />
      </QueryClientProvider>
    </Provider>

  );
}

export default App;
