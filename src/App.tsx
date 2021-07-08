import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/globalStyle';

const AppComponent = styled.div`
  background-color: ${props => props.theme.colors.main};
  height: 100vh;
  width: 100%;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.mainText};
`;

const ReactLogo = styled.img`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
`;

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppComponent data-testid="AppComponent">
      <AppHeader>
        <ReactLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          data-testid="AppLink"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppComponent>
  </ThemeProvider>
);
