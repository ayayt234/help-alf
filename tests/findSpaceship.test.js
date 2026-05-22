const findSpaceship = require('../src/findSpaceship');

test('returns lost message for empty map', () => {
    expect(findSpaceship('')).toBe('Spaceship lost forever.');
});

test('should return [0, 0] if the map only contains X', () => {
    expect(findSpaceship('X')).toEqual([0, 0]);
});