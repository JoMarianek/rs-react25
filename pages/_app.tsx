import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '../styles/global.css';
import { store } from '../store';
import { ThemeProvider } from '../contexts/ThemeProvider';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
