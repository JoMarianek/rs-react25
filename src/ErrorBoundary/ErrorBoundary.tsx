import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went wrong.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery.
          </p>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
