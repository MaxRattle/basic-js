const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //БОЖЕ КАКИЕ ДУШНЫЕ ПОСЛЕДНИЕ ЗАДАНИЯ
  const seasons = ["winter", "spring", "summer", "autumn"];

  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  }

  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  return seasons[Math.floor(((month + 1) % 12) / 3)];
}

module.exports = {
  getSeason,
};
