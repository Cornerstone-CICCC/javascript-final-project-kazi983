/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  if (!arr) throw new Error('Array cannot be undefined');

  if (!Array.isArray(arr)) throw new Error('Argument must be an array');

  if (arr.some((el) => typeof el !== 'number'))
    throw new Error('Array can only contain numbers');

  return arr.reduce((total, number) => total + number, 0);
}

module.exports = sumArray;
