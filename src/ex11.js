/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  // validate 'arr'
  if (!arr && (!Array.isArray(arr) || arr.length !== 0))
    throw new Error('Array cannot be undefined');

  if (!Array.isArray(arr)) throw new Error('Argument must be an array');

  // validate 'positions'
  if (!positions && positions !== 0) throw new Error('Positions cannot be undefined');

  if (typeof positions !== 'number') throw new Error('Positions must be a number');

  if (!Number.isInteger(positions)) throw new Error('Positions must be an integer');

  const splitIndex =
    positions >= 0 // -5
      ? arr.length - positions
      : -positions < arr.length
        ? -positions
        : -arr.length - positions;

  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

module.exports = rotateArray;

console.log([1, 2, 3].slice(3 - 4));
