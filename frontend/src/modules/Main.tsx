import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../themes';
import { MainLayout } from './MainLayout';

export const Main = (): JSX.Element => {
  const [theme, setTheme] = React.useState('dark');
  // const handleThemeChange = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainLayout />
      {/* <div className="App">
        <header className="App-header">
          <button style={{ height: '30px' }} onClick={handleThemeChange}>
            <strong>CHANGE STYLES, BITCH</strong>
          </button>
        </header>
      </div> */}
    </ThemeProvider>
  );
};
