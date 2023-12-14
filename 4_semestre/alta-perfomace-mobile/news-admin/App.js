import React from 'react';
import Routes from './src/routes/routes';
import { Provider } from 'react-native-paper';

export default function App() {
  return <Provider>
    <Routes></Routes>
  </Provider>
}

