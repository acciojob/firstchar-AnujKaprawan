First Char
Instructions
Write a function firstChar, which returns the first character that is not a space when a string is passed as an argument. If the input string only contains spaces, the function should return an empty string.

Examples
Input	Output
firstChar(' Rosa Parks ')	'R'
firstChar(' Hello World ')	'H'
firstChar(' ')	''
firstChar('')	''
Acceptance Criteria
The function should return the correct output for all the example cases mentioned above.
The function should handle edge cases like an empty string or a string with only spaces.
Constraints
The input string will only contain printable ASCII characters.
The input string can have a maximum length of 1000 characters.

function firstChar(text) {
  // Remove leading and trailing spaces from the text
  const trimmedText = text.trim();
  
  // Check if the trimmed text is empty
  if (trimmedText === '') {
    return '';
  }
  
  // Iterate through the characters of the trimmed text
  for (let i = 0; i < trimmedText.length; i++) {
    // Return the first non-space character found
    if (trimmedText[i] !== ' ') {
      return trimmedText[i];
    }
  }
  
  // Return empty string if no non-space character is found
  return '';
}


// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

