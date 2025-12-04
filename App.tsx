import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootNavigator from '@navigation/RootNavigator';
import I18nProvider from '@components/I18nProvider';
import OfflineProvider from '@components/OfflineProvider';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <I18nProvider>
        <OfflineProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </OfflineProvider>
      </I18nProvider>
    </Provider>
  );
}

export default App;
