import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import { AppProvider } from './context/AppContext';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1565c0' },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
);
