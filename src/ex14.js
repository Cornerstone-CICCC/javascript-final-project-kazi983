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

  let res;

  const zeroCount = numbers.filter((num) => num === 0).length;
  let searchIndex = 0;

  while (numbers.includes(0)) {
    if (numbers[searchIndex] === 0) {
      numbers = [
        ...numbers.slice(
          0,
          numbers.findIndex((num) => num === 0, searchIndex),
        ),
        ...numbers.slice(numbers.findIndex((num) => num === 0, searchIndex) + 1),
      ];
    } else {
      searchIndex++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    numbers.push(0);
  }

  return numbers;
}

module.exports = moveZeroes;
