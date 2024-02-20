import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { NoInternet } from './components/molecules/NoInternet/NoInternet';
import App from './App';
import { theme } from './shared/theme';
import { SharedProvider } from './hooks/useShared';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <MantineProvider theme={theme}>
    <NoInternet />
      <SharedProvider>
        <App />
      </SharedProvider>
  </MantineProvider>
);
