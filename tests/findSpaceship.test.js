const findSpaceship = require('../src/findSpaceship');

test('returns lost message for empty map', () => {
  expect(findSpaceship('')).toBe('Spaceship lost forever.');
});