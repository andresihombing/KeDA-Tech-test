const solution = require('./test2');

test('sorting', () => {
  expect(solution([1,4,6,2,7,8,3,9,5,0])).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
});