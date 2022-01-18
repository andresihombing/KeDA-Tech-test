const solution = require('./test3');

test('polindrome', () => {
  expect(solution('nababan')).toBe(true);
});

test('polindrome', () => {
    expect(solution('sihombing')).toBe(false);
  });
  