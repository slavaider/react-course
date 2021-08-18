import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders correctly', async () => {
  const wrapper = render(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
