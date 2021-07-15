import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/defaultTheme';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
  test('renders', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );
    expect(getByTestId('HomePage')).toBeInTheDocument();
    expect(getByTestId('AppComponent')).toBeInTheDocument();
    const linkElement = getByTestId('AppLink');
    expect(linkElement).toBeInTheDocument();
    // Assert by text
    expect(linkElement.textContent).toBe('Learn React');
    // Assert by style rule
    expect(linkElement).toHaveStyleRule('color', theme.colors.link);
  });
});
