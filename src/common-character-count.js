const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let duplicateS1 = [];
  // let charactersS1 = s1.split('');
  // let duplicateS2 = [];
  // let charactersS2 = s2.split('');
  
  // for(let i=0; i<charactersS1.length; i++){
  //   let charS1 = charactersS1[i]
  //   if(duplicateS1.indexOf(charS1) === -1){
  //     if(charactersS1.indexOf(charS1, i+1) !== -1){
  //       duplicateS1.push(charS1)
  //     }
  //   }
  // }
  
  // for(let i=0; i<charactersS2.length; i++){
  //   let charS2 = charactersS2[i]
  //   if(duplicateS2.indexOf(charS2) === -1){
  //     if(charactersS2.indexOf(charS2, i+1) !== -1){
  //       duplicateS2.push(charS2)
  //     }
  //   }
  // }
  
  // return duplicateS1.length +  duplicateS2.length
  let count = 0;
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');

  for (let i = 0; i < arrS1.length; i++) {
    const index = arrS2.indexOf(arrS1[i]);
    if (index > -1) {
      count++;
      arrS2.splice(index, 1);
    }
  }

  return count;
}


module.exports = {
  getCommonCharacterCount
};
