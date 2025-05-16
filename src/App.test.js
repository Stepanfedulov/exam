import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('increments counter when button is clicked', () => {
  render(<App />);
  
  const button = screen.getByText('Increment');
  const counter = screen.getByTestId('counter');
  
  expect(counter).toHaveTextContent('Count: 0');
  
  fireEvent.click(button);
  expect(counter).toHaveTextContent('Count: 1');
  
  fireEvent.click(button);
  expect(counter).toHaveTextContent('Count: 2');
});