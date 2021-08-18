import { act, render } from '@testing-library/react';
import React from 'react';
import Loader from '../../components/loader/Loader';
import withFade from './WithFade';

test('renders correctly', () => {
  jest.useFakeTimers();
  const Hoc = withFade(Loader);
  const wrapper = render(<Hoc />);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  const loader = wrapper.getByLabelText('transition');
  expect(!loader.getAttribute('in')).toBeTruthy();
  expect(wrapper.container).toMatchSnapshot();
});
