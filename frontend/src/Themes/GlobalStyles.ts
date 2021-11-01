import { createGlobalStyle } from 'styled-components';

interface Theme {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }: Theme) => theme.primary};
        color: ${({ theme }: Theme) => theme.text};
        font-family: Lato, sans-serif;

        & button {
            background-color: ${({ theme }: Theme) => theme.secondary};
            border: 3px solid ${({ theme }: Theme) => theme.accent};
            border-radius: 3px;
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

        & .material-text {
          border: 1px solid #ced4da;
          border-radius: 0.50rem;
          padding: 0.375rem 0.75 rem;
          display: block;
        
    
        }
        & .material-text.md-18 {
          font-size: 1.8rem;
        }
        & .material-text.md-24 {
          font-size: 2.4rem;
        }
        & .material-text.md-36 {
          font-size: 3.6rem;
        }
        & .material-text.md-48 {
          font-size: 4.8rem;
        }
    }
`;
