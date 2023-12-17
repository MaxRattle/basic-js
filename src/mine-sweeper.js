const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //а я думал тут +- легко, надо еще раз когда поправлюсь
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];

    for (let j = 0; j < cols; j++) {
      // Проверяем соседние элементы вокруг текущего элемента
      let count = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          // Пропускаем текущий элемент
          if (x === 0 && y === 0) {
            continue;
          }

          // Проверяем соседний элемент с учетом границ матрицы
          const row = i + x;
          const col = j + y;

          if (
            row >= 0 &&
            row < rows &&
            col >= 0 &&
            col < cols &&
            matrix[row][col] === true
          ) {
            count++;
          }
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
