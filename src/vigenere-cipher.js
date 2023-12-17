const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  //просто ждец полный
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // constructor(isDirect = true) {
  //   this.isDirect = isDirect;
  //   this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // }

  // encrypt(message, key) {
  //   if (!message || !key) {
  //     throw new Error("Error with Incorrect arguments!");
  //   }

  //   message = message.toUpperCase();
  //   key = key.toUpperCase();

  //   let encryptedMessage = "";
  //   let keyIndex = 0;

  //   for (let i = 0; i < message.length; i++) {
  //     const messageChar = message[i];
  //     if (this.alphabet.includes(messageChar)) {
  //       const keyChar = key[keyIndex % key.length];
  //       const keyCharIndex = this.alphabet.indexOf(keyChar);
  //       const charIndex = this.alphabet.indexOf(messageChar);
  //       const encryptedCharIndex =
  //         (charIndex + keyCharIndex) % this.alphabet.length;
  //       const encryptedChar = this.alphabet[encryptedCharIndex];
  //       encryptedMessage += encryptedChar;
  //       keyIndex++;
  //     } else {
  //       encryptedMessage += messageChar;
  //     }
  //   }

  //   return this.isDirect
  //     ? encryptedMessage
  //     : encryptedMessage.split("").reverse().join("");
  // }

  // decrypt(encryptedMessage, key) {
  //   if (!encryptedMessage || !key) {
  //     throw new Error("Error with Incorrect arguments!");
  //   }

  //   encryptedMessage = encryptedMessage.toUpperCase();
  //   key = key.toUpperCase();

  //   let decryptedMessage = "";
  //   let keyIndex = 0;

  //   for (let i = 0; i < encryptedMessage.length; i++) {
  //     const encryptedChar = encryptedMessage[i];
  //     if (this.alphabet.includes(encryptedChar)) {
  //       const keyChar = key[keyIndex % key.length];
  //       const keyCharIndex = this.alphabet.indexOf(keyChar);
  //       const encryptedCharIndex = this.alphabet.indexOf(encryptedChar);
  //       const decryptedCharIndex =
  //         (encryptedCharIndex - keyCharIndex + this.alphabet.length) %
  //         this.alphabet.length;
  //       const decryptedChar = this.alphabet[decryptedCharIndex];
  //       decryptedMessage += decryptedChar;
  //       keyIndex++;
  //     } else {
  //       decryptedMessage += encryptedChar;
  //     }
  //   }

  //   return this.isDirect
  //     ? decryptedMessage
  //     : decryptedMessage.split("").reverse().join("");
  // }
  //АХАХАХАХХАХАХА ЗРЯ ЗАНОВО ПЕРЕПИСЫВАЛ, все же ночами сидеть плохо
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const charCode =
          ((message.charCodeAt(i) -
            65 +
            (key.charCodeAt(keyIndex % key.length) - 65)) %
            26) +
          65;
        encryptedMessage += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.reverse
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        const charCode =
          ((encryptedMessage.charCodeAt(i) -
            65 -
            (key.charCodeAt(keyIndex % key.length) - 65) +
            26) %
            26) +
          65;
        decryptedMessage += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.reverse
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
