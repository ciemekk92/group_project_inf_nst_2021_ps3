import { createGlobalStyle } from 'styled-components';

interface Theme {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
}

interface Props {
  readonly themeType: string;
}

export const GlobalStyles = createGlobalStyle<Props & Theme>`
    body {
        background-image: url(${(props) =>
          props.themeType === 'light' ? '/bg_light.svg' : '/bg_dark.svg'});
        background-size: 100%, 6%;
        color: ${(props) => props.theme.text};
        font-family: Lato, sans-serif;
        
        & button {
          font-size: 1.2rem;
        }

        & .material-icons.md-18,
        & .material-icons-outlined.md-18 {
          font-size: 1.8rem;
        }

        & .material-icons.md-24,
        & .material-icons-outlined.md-24 {
          font-size: 2.4rem;
        }
        
        & .material-icons.md-36,
        & .material-icons-outlined.md-36 {
          font-size: 3.6rem;
        }
        
        & .material-icons.md-48,
        & .material-icons-outlined.md-48 {
          font-size: 4.8rem;
        }
        
        & .material-icons.md-96,
        & .material-icons-outlined.md-96 {
          font-size: 9.6rem;
        }
    }
`;
