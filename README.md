# firstChar

## Instructions

Write a function firstChar, which returns the first character that is not a space when a string is passed as an argument. If the input string only contains spaces, the function should return an empty string.

## Examples

```javascript
firstChar(' Rosa Parks ') -> 'R'
firstChar('  Hello World ') -> 'H'
firstChar('   ') -> ''
firstChar('') -> ''
```

## Constraints

- The input string will only contain printable ASCII characters.
- The input string can have a maximum length of 1000 characters.

## Acceptance Criteria

- The function should return the correct output for all the example cases mentioned above.
- The function should handle edge cases like an empty string or a string with only spaces.
