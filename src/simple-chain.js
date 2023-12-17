const { NotImplementedError } = require("../extensions/index.js");
//чет сразу не пошло, пока что самая сложная задача
/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
// links: [],

// getLength() {
// return this.links.length;
// },

// addLink(value) {
// if (value === undefined) {
// this.links.push("( )");
// } else {
// this.links.push(`( ${value} )`);
// }
// return this;
// },

// removeLink(position) {
// if (
// typeof position !== "number" ||
// position < 1 ||
// position > this.links.length
// ) {
// this.links = [];
// throw new Error("Error with You can't remove incorrect link!");
// }

// this.links.splice(position - 1, 1);
// return this;
// },

// reverseChain() {
// this.links.reverse();
// return this;
// },

// finishChain() {
// const result = this.links.join("~~");
// this.links = [];
// return result;
// },
// };
const chainMaker = {
  chain: [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
