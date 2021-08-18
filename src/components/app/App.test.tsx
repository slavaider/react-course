import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders correctly', async () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});
