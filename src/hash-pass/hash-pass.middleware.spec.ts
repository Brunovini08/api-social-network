import { HashPassMiddleware } from './hash-pass.middleware';

describe('HashPassMiddleware', () => {
  it('should be defined', () => {
    expect(new HashPassMiddleware()).toBeDefined();
  });
});
