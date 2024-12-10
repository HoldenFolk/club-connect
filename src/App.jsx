import React from 'react';
import Theme from './providers/Theme';
import NavigationRouter from './components/organism/NavigationRouter';
import store from './providers/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Theme>
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    </Theme>
  );
};

export default App;
