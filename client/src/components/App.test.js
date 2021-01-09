import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site name correctly', () => {
  render(<App />);
  const nameElement = screen.getByText(/Reddit Feed/i);
  expect(nameElement).toBeInTheDocument();
});
