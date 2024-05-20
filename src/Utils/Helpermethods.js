export const initialGenerator = (username) => {
  // Split the input string into words
  let words = username.trim().split(" ");

  
  let initials = [];

  // Loop through each word in the array
  for (let word of words) {
    // If the word has more than one character
    if (word.length > 1) {
    
      initials.push(word.charAt(0));
    } else if (word.length === 1) {
      // If the word has only one character, add it to the array
      initials.push(word);
    }
  }

  // If there's only one word, take the first two characters of that word
  if (words.length === 1 && words[0].length > 1) {
    return words[0].slice(0, 2);
  }

  // Join the initial characters array into a string and return
  return initials.join("");
};

// bg light color function

export function generateLightColor() {
  // Generate random RGB values in the range [180, 255]
  const r = Math.floor(Math.random() * 76) + 180; // Red component
  const g = Math.floor(Math.random() * 76) + 180; // Green component
  const b = Math.floor(Math.random() * 76) + 180; // Blue component

  // Construct the color string in hexadecimal format
  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return color;
}