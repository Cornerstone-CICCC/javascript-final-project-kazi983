/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  if (!str && str !== '') throw new Error('String cannot be undefined');

  if (typeof str !== 'string') throw new Error('Argument must be a string');

  let sentences;

  return {
    characters: str.length,
    words: str.split(' ').filter((el) => el !== '').length,
    sentences: str.split(' ').every((letter) => letter === '')
      ? 0
      : str.split(/[\.|!|\?]/).filter((el) => el !== '').length,
  };
}

module.exports = analyzeText;
