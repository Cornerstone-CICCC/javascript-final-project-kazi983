/**
 * Find the indices of two numbers that add up to the target.
 * Return an empty array when no pair exists.
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function findTwoSum(numbers, target) {
  if (!numbers && (!Array.isArray(numbers) || numbers.length !== 0))
    throw new Error('Array cannot be undefined');

  if (!Array.isArray(numbers)) throw new Error('Argument must be an array');

  if (numbers.some((el) => typeof el !== 'number'))
    throw new Error('Array can only contain numbers');

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }

  return [];
}

module.exports = findTwoSum;
