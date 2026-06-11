/**
 * Determine whether two strings are anagrams of each other.
 * @param {string} firstString
 * @param {string} secondString
 * @returns {boolean}
 */
function checkAnagram(firstString, secondString) {
  if (!firstString && firstString !== '')
    throw new Error('First string cannot be undefined');

  if (!secondString && secondString !== '')
    throw new Error('Second string cannot be undefined');

  if (typeof firstString !== 'string' || typeof secondString !== 'string')
    throw new Error('Arguments must be strings');

  firstString = firstString.split('').sort().join('');
  secondString = secondString.split('').sort().join('');

  return firstString === secondString;
}

module.exports = checkAnagram;
