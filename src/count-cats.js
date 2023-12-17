const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //
  // let mat = matrix.map((el) => el.toString()).join('').replaceAll(',','') //"01^^0^^2^^12"
  // let count = 0;
  // for(let i=0; i<mat.length; i++){
  //   if(mat[i] === '^' && mat[i+1] === '^'){
  //     count++;
  //     i++;
  //   }
  // }
  // return count
//
let count = 0;
matrix.forEach(row => {
  row.forEach(cell => {
    if (cell === '^^') {
      count++;
    }
  });
});
return count;
}

module.exports = {
  countCats
};
