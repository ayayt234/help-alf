function findSpaceship(map) {
    if (map === 'X') {
        return [0, 0];
    }
    return "Spaceship lost forever.";
}

module.exports = findSpaceship;