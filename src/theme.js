import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00897B',
      light: '#4DB6AC',
      dark: '#00695C',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a2332',
      light: '#2c3e50',
      dark: '#0d1520',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafbfc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2332',
      secondary: '#5f6b7a',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"DM Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
    },
    overline: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"DM Sans", sans-serif',
          borderRadius: 10,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: '#00897B',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"DM Sans", sans-serif',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
