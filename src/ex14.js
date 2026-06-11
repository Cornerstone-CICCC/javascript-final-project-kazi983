/**
 * Return a new array with all zeroes moved to the end.
 * Keep the other values in their original order.
 * @param {number[]} numbers
 * @returns {number[]}
 */
function moveZeroes(numbers) {
  if (!numbers) throw new Error('Array cannot be undefined');

  if (!Array.isArray(numbers)) throw new Error('Argument must be an array');

  if (numbers.some((el) => typeof el !== 'number'))
    throw new Error('Array can only contain numbers');

  let res = [...numbers];

  const zeroCount = numbers.filter((num) => num === 0).length;
  let searchIndex = 0;

  while (searchIndex < numbers.length - zeroCount) {
    if (res[searchIndex] === 0) {
      res = res.toSpliced(searchIndex, 1);
      res.push(0);
    } else {
      searchIndex++;
    }
  }
  return res;
}

module.exports = moveZeroes;
