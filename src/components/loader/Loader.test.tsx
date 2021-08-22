import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('renders correctly', async () => {
  const wrapper = render(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
