import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { history, store } from './config/store';
import { HistoryRouter as Router } from "redux-first-history/rr6";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
