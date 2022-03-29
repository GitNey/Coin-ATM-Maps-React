import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { history, store } from './config/store';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  	<React.StrictMode>
    	<Provider store={store}>
			<Router history={history}>
      			<App />
			</Router>
    	</Provider>
  	</React.StrictMode>,
  	document.getElementById('root')
);

// expose store when run in Cypress
if ((window as any).Cypress) {
	(window as any).store = store
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
