const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //кто в здравом уме после собаки поставит точку ?)
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return email.toString().split("@")[1];
  const atIndex = email.lastIndexOf("@");
  return email.substring(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
