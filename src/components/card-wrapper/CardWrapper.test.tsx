import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import News from '../../interfaces/news';
import CardWrapper from './CardWrapper';

test('should render', () => {
  const items: News[] = [
    {
      author: '',
      content: '',
      description: '',
      publishedAt: '',
      source: {},
      title: '',
      url: '',
      urlToImage: '',
    },
    {
      author: '',
      content: '',
      description: '',
      publishedAt: '',
      source: {},
      title: '',
      url: '',
      urlToImage: '',
    },
  ];

  const wrapper = render(
    <Router>
      <CardWrapper items={items} />
    </Router>,
  );

  expect(wrapper).toMatchSnapshot();
});
