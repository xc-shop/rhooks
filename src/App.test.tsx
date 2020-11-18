import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getAllByTitle(/测试titile/i)
  // const linkElement = screen.getByText(/learn react/i);
  console.log('title>>>', title);
  expect(title).toBeInTheDOM();
});
