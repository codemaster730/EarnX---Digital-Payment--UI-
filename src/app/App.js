import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from "react-redux";
import store from "./store";
import rootSaga from './store/rootSaga';
import withSaga from './store/HOCs/withSaga';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="en">
          <Router>
              <AppLayout />
          </Router>
      </IntlProvider>
    </Provider>
  );
}

export default withSaga(rootSaga)(App);