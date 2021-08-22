import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import store from '../../store/store';

test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
