import React from 'react';
import { StatusBar } from 'react-native';
import AppRoutes from './src/routes/stackRoutes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <AppRoutes />
    </>
  );
}

