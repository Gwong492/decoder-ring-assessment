const substitutionModule = (function () {
  /*A set charcters to write as the values in the cipher object*/
  const charSet = [
    ['a'], ['b'], ['c'], ['d'], ['e'], ['f'], 
    ['g'], ['h'], ['i'], ['j'], ['k'], ['l'], 
    ['m'], ['n'], ['o'], ['p'], ['q'], ['r'],
    ['s'], ['t'], ['u'], ['v'], ['w'], ['x'],
    ['y'], ['z'],
  ]
  /*Split the input alphabet into it's individual characters.
  Loop through the split input alphabet and write them as the keys to the cipher object
  assigning the charSet array letters according to their corrisponding array location*/
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    const regex = /[^\w\s']/g;
    if (!alphabet.includes(alphabet[alphabet.search(regex)])) return false;
    cipher = {};
    alphabetSplit = alphabet.split('');
    for (let i = 0; i < alphabetSplit.length; i++) {
      const char = alphabetSplit[i];
      cipher[char] = `${charSet[i]}`;
    }
    /*If 'Encode === true' loop through the split message.
    Check to see if the letters in in the message array match the values in the cipher object.
    If they match assign key to the message array position ignoring spaces and special characters.*/
    if (encode) {
      let message = input.split('');
      for (let i = 0; i < message.length; i++) {
        const letter = message[i];
        if (letter === ' ' || input.codePointAt(i) < 65 || input.codePointAt(i) > 122) {
          continue; 
        } else {
          for (let key in cipher) {
            if (cipher[key] === letter.toLowerCase()) {
              message[i] = key;
            }  
          }
        }
      }
      return message.join('');
    /*If 'Encode !== true' loop through the split encoded message.
    If the key matches the character in the split message assign cipher object value to the
    message array location ignorinig spaces and special characters.*/
    } else {
      let message = input.split('');
      message.forEach((code, index) => {
        if (!Object.hasOwn(cipher, code)) {
        } else {
          message[index] = cipher[code];
        }
      })
      return message.join('');
    }     
  }

  return {
    substitution,
  };
})();

console.log(substitutionModule.substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswa!", false))

module.exports = { substitution: substitutionModule.substitution };
