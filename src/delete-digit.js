const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numStr = n.toString();
  const result = [];

  for (let i = 0; i < numStr.length; i++) {
    const newNum = Number(numStr.slice(0, i) + numStr.slice(i + 1));
    result.push(newNum);
    result.sort((a, b) => b - a);
  }
  return result[0];
}

module.exports = {
  deleteDigit
};
