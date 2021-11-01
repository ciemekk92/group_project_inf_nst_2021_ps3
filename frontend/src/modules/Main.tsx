import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from 'Themes';
import { MainLayout } from './MainLayout';

export const Main = (): JSX.Element => {
  const [theme, setTheme] = React.useState('light');
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
