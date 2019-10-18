import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
