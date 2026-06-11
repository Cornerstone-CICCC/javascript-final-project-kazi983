/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  if (!str && str !== '') throw new Error('String cannot be undefined');

  if (typeof str !== 'string') throw new Error('Argument must be a string');

  return str
    .trim()
    .split(' ')
    .filter((word) => word.length > 0)
    .map((word) =>
      word.length === 0
        ? word
        : word.length === 1
          ? word[0].toUpperCase()
          : word[0].toUpperCase() + word.toLowerCase().slice(1),
    )
    .join(' ');
}

module.exports = capitalizeWords;
