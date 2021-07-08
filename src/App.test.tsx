import { render } from '@testing-library/react';
import { App } from './App';
import { theme } from './styles/defaultTheme';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('AppComponent')).toBeInTheDocument();
  const linkElement = getByTestId('AppLink');
  expect(linkElement).toBeInTheDocument();
  // Assert by text
  expect(linkElement.textContent).toBe('Learn React');
  // Assert by style rule
  expect(linkElement).toHaveStyleRule('color', theme.colors.link);
});
