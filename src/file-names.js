const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //нужно еще раз попробовать после болезни
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let nameCount = {}; // объект для хранения количества каждого имени
  let result = []; // массив для хранения переименованных имен

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let count = nameCount[name]; // получаем количество уже использованных имён с таким же именем

    if (count === undefined) {
      // если имя встречается впервые
      result.push(name); // добавляем его в массив результатов
      nameCount[name] = 1; // устанавливаем количество на 1
    } else {
      let newName = name + "(" + count + ")"; // формируем новое имя с суффиксом
      result.push(newName); // добавляем новое имя в массив результатов
      nameCount[name] = count + 1; // увеличиваем количество имён с таким же именем
      nameCount[newName] = 1; // устанавливаем количество нового имени на 1
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
