import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pomodoro Timer h1', () => {
  render(<App />);
  const h1Element = screen.getByText(/Pomodoro Timer/i);
  expect(h1Element).toBeInTheDocument();
});
