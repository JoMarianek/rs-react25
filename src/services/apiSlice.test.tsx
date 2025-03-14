import { describe, it, expect } from 'vitest';
import { apiSlice } from './apiSlice';

describe('apiSlice', () => {
  it('should have getAstronomicalObj endpoint defined', () => {
    expect(apiSlice.endpoints.getAstronomicalObj).toBeDefined();
  });
});
