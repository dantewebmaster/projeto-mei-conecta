import React from 'react';
import Routes from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
  return (
    <Routes />
  );
}
