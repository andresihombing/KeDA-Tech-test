const solution = require('./test1');

test('fish bash', () => {
  expect(solution(30)).toBe('fish bash');
});

test('fish', () => {
  expect(solution(3)).toBe('fish');
});

test('bash', () => {
  expect(solution(5)).toBe('bash');
});