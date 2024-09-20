function pyramid(height) {

    let spaces = height;
    let hashes = 0;
    for (let i = 0; i < height; i++) {
        // Calculate the number of spaces and hashes for the current row
        spaces--
        hashes++
        // Print the row
        console.log(' '.repeat(spaces) + '#'.repeat(hashes));
    }
}

// Example usage:
pyramid(3);
