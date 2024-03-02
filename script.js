function firstChar(text) {
 for (let char of text) {
        // Check if the character is not a space
        if (char !== ' ') {
            // Return the first non-space character found
            return char;
        }
    }
    // If all characters are spaces or the string is empty, return an empty string
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));