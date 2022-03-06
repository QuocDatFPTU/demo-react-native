import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import HomeScreen from './src/screens/HomeScreen';
import {LogBox} from 'react-native';
const App = () => {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
export default App;
