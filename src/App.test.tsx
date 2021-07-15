import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('renders', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('HomePage')).toBeInTheDocument();
  });
});
