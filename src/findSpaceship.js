function findSpaceship(map) {
    if (!map || !map.includes('X')) {
        return "Spaceship lost forever.";
    }

    // Karte in einzelne Zeilen aufteilen
    const lines = map.split('\n');

    // Da unten links [0,0] ist, laufen wir von der letzten Zeile hoch zur ersten
    for (let y = 0; y < lines.length; y++) {
        const currentLine = lines[lines.length - 1 - y];
        const x = currentLine.indexOf('X');
        
        if (x !== -1) {
            return [x, y];
        }
    }

    return "Spaceship lost forever.";
}

module.exports = findSpaceship;