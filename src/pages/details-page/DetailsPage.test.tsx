import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from './DetailsPage';
import store from '../../store/store';

test('renders correctly', async () => {
  const props = {
    match: { params: { title: '' } },
  };

  const wrapper = render(
    <Provider store={store}>
      <Router>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <DetailsPage {...props} />
      </Router>
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
