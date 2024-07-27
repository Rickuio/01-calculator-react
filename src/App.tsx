import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { CalculatorScreen } from './Screens/CalculatorScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#111111'
  };

  return (
    <CalculatorScreen />
  );
}

export default App;
