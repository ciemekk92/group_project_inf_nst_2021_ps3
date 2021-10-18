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
        transition: all 0.6s ease;

        & button {
            background-color: ${({ theme }: Theme) => theme.secondary};
            border: 3px solid ${({ theme }: Theme) => theme.accent};
            border-radius: 3px;
        }
    }
`;
