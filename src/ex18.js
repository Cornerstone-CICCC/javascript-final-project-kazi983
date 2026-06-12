/**
 * Return all values from a matrix in clockwise spiral order.
 * @param {Array[]} matrix
 * @returns {Array}
 */
function traverseSpiral(matrix) {
  if (!matrix) throw new Error('Matrix cannot be undefined');

  if (!Array.isArray(matrix)) throw new Error('Matrix must be an array');

  if (matrix.length === 0) return [];

  matrix.forEach((row) => {
    if (row.length !== matrix[0].length)
      throw new Error('Matrix rows must have equal lengths');
  });

  let isContinueRight = true;
  let isContinueLeft = false;
  let isContinueUp = false;
  let isContinueDown = false;

  let topEnd = 0;
  let leftEnd = 0;
  let rightEnd = matrix[0].length - 1;
  let bottomEnd = matrix.length - 1;

  let x = 0;
  let y = 0;
  const res = [];

  while (res.length < matrix[0].length * matrix.length) {
    if (isContinueRight) {
      res.push(matrix[y][x]);

      if (x === rightEnd) {
        isContinueRight = false;
        isContinueDown = true;
        y++;
        rightEnd--;
      } else {
        x++;
      }
    } else if (isContinueDown) {
      res.push(matrix[y][x]);

      if (y === bottomEnd) {
        isContinueDown = false;
        isContinueLeft = true;
        x--;
        bottomEnd--;
      } else {
        y++;
      }
    } else if (isContinueLeft) {
      res.push(matrix[y][x]);

      if (x === leftEnd) {
        isContinueLeft = false;
        isContinueUp = true;
        y--;
        leftEnd++;
      } else {
        x--;
      }
    } else if (isContinueUp) {
      res.push(matrix[y][x]);

      if (y === topEnd + 1) {
        isContinueUp = false;
        isContinueRight = true;
        x++;
        topEnd++;
      } else {
        y--;
      }
    }
  }

  return res;
}

module.exports = traverseSpiral;
