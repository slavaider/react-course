import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('submit succefully', async () => {
  const handleClick = jest.fn();

  render(<SearchBar searchHandler={handleClick} />);

  fireEvent.submit(screen.getByLabelText('search-bar-form'), {
    target: {
      sort: {
        value: 'publishedAt',
      },
      search: {
        value: 'TEST',
      },
    },
  });
  expect(handleClick).toHaveBeenCalledTimes(1);
});
