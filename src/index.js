import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// ports
const clientPort = 3000;
const serverPort = 8888;
const serverUrl = `http://localhost:${serverPort}`;

// before enter
const { href } = window.location;
if (href.match(serverUrl)) {
  // redirect to client port
  window.location.href = href.replace(serverPort, clientPort);
} else {
  // react init
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
