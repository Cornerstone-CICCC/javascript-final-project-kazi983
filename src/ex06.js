/**
 * Count the vowels in a string.
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  if (!str && str !== '') throw new Error('String cannot be undefined');

  if (typeof str !== 'string') throw new Error('Argument must be a string');

  const vowels = 'aeiou';

  return str
    .toLowerCase()
    .split('')
    .filter((character) => vowels.includes(character)).length;
}

module.exports = countVowels;
