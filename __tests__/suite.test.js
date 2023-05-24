const countSmileys = require('../exercise');

test('Counting valid smiley faces - Test 1', () => {
  const arr = [':)', ';(', ';}', ':-D'];
  expect(countSmileys(arr)).toBe(2);
});

test('Counting valid smiley faces - Test 2', () => {
  const arr = [';D', ':-(', ':-)', ';~)'];
  expect(countSmileys(arr)).toBe(3);
});

test('Counting valid smiley faces - Test 3', () => {
  const arr = [';]', ':[', ';*', ':$', ';-D'];
  expect(countSmileys(arr)).toBe(1);
});

test('Counting valid smiley faces - Empty array', () => {
  const arr = [];
  expect(countSmileys(arr)).toBe(0);
});

test('Counting valid smiley faces - All happy faces', () => {
  const arr = [':)', ';)', ':D'];
  expect(countSmileys(arr)).toBe(3);
});