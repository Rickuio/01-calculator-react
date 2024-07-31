import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#111111'
  };

  return (
    <View style={ styles.backgroud}>
      <StatusBar 
        barStyle={ 'light-content' }
        backgroundColor={ 'black' }
      />
      <CalculatorScreen />
    </View>
  );
}

export default App;
