import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../themes';

export const Main = (): JSX.Element => {
    const [theme, setTheme] = React.useState('light');
  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <button style={{ height: '30px' }} onClick={handleThemeChange}>
            <strong>CHANGE STYLES, BITCH</strong>
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}