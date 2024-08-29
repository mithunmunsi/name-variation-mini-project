// Function to get the number of characters in the name
export function getNumberOfChars(name: string): number {
  return name.length;
}

// Function to get the first character of the name
export function getFirstChar(name: string): string {
  return name.charAt(0);
}

// Function to get the last character of the name
export function getLastChar(name: string): string {
  return name.charAt(name.length - 1);
}

// Function to convert the name to lower case
export function getLower(name: string): string {
  return name.toLowerCase();
}

// Function to convert the name to upper case
export function getUpper(name: string): string {
  return name.toUpperCase();
}
