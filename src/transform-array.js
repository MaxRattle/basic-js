const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // if (!Array.isArray(arr)) {
  //   throw new Error("Error: 'arr' parameter must be an instance of the Array!");
  // }
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "number") {
  //     result.push(arr[i]);
  //   } else if (arr[i] === "--discard-next") {
  //     i++;
  //   } else if (arr[i] === "--discard-prev") {
  //     if (result.length > 0) {
  //       result.pop();
  //     }
  //   } else if (arr[i] === "--double-next") {
  //     if (i < arr.length - 1) {
  //       result.push(arr[i + 1]);
  //     }
  //   } else if (arr[i] === "--double-prev") {
  //     if (i > 0) {
  //       result.push(result[result.length - 1]);
  //     }
  //   }
  // }
  // return result;
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const output = [];
  let discardNext = false;

  arr.forEach((item, i) => {
    if (discardNext) {
      discardNext = false;
      return;
    }

    switch (item) {
      case "--double-next":
        if (i !== arr.length - 1) {
          output.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          output.push(output[output.length - 1]);
        }
        break;
      case "--discard-next":
        discardNext = true;
        break;
      case "--discard-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          output.pop();
        }
        break;
      default:
        output.push(item);
        break;
    }
  });

  return output;
}

module.exports = {
  transform
};
