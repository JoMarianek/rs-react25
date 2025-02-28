import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '../styles/global.css';
import { store } from '../store';
import { ThemeProvider } from '../contexts/ThemeProvider';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default MyApp;
