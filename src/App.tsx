import { ThemeProvider } from 'styled-components';
import { theme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/globalStyle';
import { HomePage } from './pages';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <HomePage />
  </ThemeProvider>
);
