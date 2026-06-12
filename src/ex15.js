/**
 * Find the longest prefix shared by every string in an array.
 * @param {string[]} strings
 * @returns {string}
 */
function findLongestCommonPrefix(strings) {
  if (!strings) throw new Error('Array cannot be undefined');

  if (!Array.isArray(strings)) throw new Error('Argument must be an array');

  if (strings.some((el) => typeof el !== 'string'))
    throw new Error('Array can only contain strings');

  if (strings.length === 0) return '';

  let prefix = '';
  const firstString = strings[0];
  const restStrings = strings.slice(1);
  let isContinue = true;

  for (let i = 0; i < firstString.length && isContinue; i += 1) {
    for (const string of restStrings) {
      if (firstString[i] !== string[i]) {
        isContinue = false;
        break;
      }
    }
    if (isContinue) prefix += firstString[i];
  }

  return prefix;
}

module.exports = findLongestCommonPrefix;
