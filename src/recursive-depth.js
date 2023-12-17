const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //вот это жесть, какой то компуктер саенс, офк еще разок потом //это ПРОСТО ЖСТЬ
  calculateDepth(array) {
    if (!Array.isArray(array)) {
      return 0;
    }

    let depth = 1;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let subDepth = this.calculateDepth(array[i]) + 1;
        if (subDepth > depth) {
          depth = subDepth;
        }
      }
    }

    return depth;
  }
}
    
  


module.exports = {
  DepthCalculator
};
