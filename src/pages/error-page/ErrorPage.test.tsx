import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ErrorPage from './ErrorPage';

test('renders correctly', async () => {
  const wrapper = render(
    <Router>
      <ErrorPage />
    </Router>,
  );
  expect(wrapper).toMatchSnapshot();
});
