import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

const ProblematicComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('catches error and renders fallback UI', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeTruthy();
    expect(
      screen.getByText(
        /The page you are looking for does not exist. How you got here is a mystery./i
      )
    ).toBeTruthy();

    consoleErrorSpy.mockRestore();
  });
});
