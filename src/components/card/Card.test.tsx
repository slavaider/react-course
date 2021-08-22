import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';
import News from '../../interfaces/news';

test('should render', () => {
  const news: News = {
    author: '',
    content: '',
    description: '',
    publishedAt: '',
    source: {},
    title: '',
    url: '',
    urlToImage: '',
  };

  const wrapper = render(
    <Router>
      <Card news={news} details={false} />
    </Router>,
  );

  expect(wrapper).toMatchSnapshot();
});
