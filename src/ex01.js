/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if (!arr) throw new Error('Array cannot be undefined');

  if (!Array.isArray(arr)) throw new Error('Argument must be an array');

  if (arr.length <= 0) throw new Error('Array cannot be empty');

  if (arr.some((el) => typeof el !== 'number'))
    throw new Error('Array can only contain numbers');

  return arr.reduce((maxNum, curr) => (curr > maxNum ? curr : maxNum), arr[0]);
}

module.exports = findMax;
