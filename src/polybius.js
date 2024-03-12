const polybiusModule = (function () {
  /*An object containing the polybius cipher grid*/
  const cipher = {
  '11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
  '12':'f', '22':'g', '32':'h', '42':'i/j', '52':'k',
  '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
  '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
  '15':'v', '25':'w', '35':'x', '45':'y', '55':'z'  
  }

  function polybius(input, encode = true) {
      /*If 'Encode === true' loop through the split string array and assign the key to the index position 
      in the array if the letter matches ignoring special characters and spaces*/
    if (encode) {
      const message = input.split('');  
      for (let i = 0; i < message.length; i++) {
      const letter = message[i];
        if (letter === ' ' || input.codePointAt(i) < 65 || input.codePointAt(i) > 122) {
          continue; 
        } else {
          for (let key in cipher) {
            if (letter.toLowerCase() === 'i' || letter.toLowerCase() === 'j') {
                message[i] = '42';
            } else if (cipher[key] === letter.toLowerCase()) {
                message[i] = key;
              }
            }
          }
      } 
      return message.join('');
      /*Else, if 'Encode === false' split the string at the spaces and assign to message and create an empty array. 
      Loop through the message array and slice the nested arrays at the number pairs ignoring spaces and special characters.
      Push the split code pairs to the empty array*/
    } else {
      const message = input.split(' ');
      let groupedPairs = [];
      for (let str of message) {
        if (str.length % 2 !== 0) {
          return false
        }
        for (let i = 0; i < str.length; i += 2) {
            let pair = str.slice(i, i + 2);
            groupedPairs.push(pair);
        }
        if (message.indexOf(str) !== message.length - 1) {
            groupedPairs.push(' ');
        }
    
      }
      /*Loop through the groupedPairs array and assign the code pairs to their corrisponding value in the cipher set
      ignoring strings that are not in the cipher array*/
      groupedPairs.forEach((code, index) => {
        if (!Object.hasOwn(cipher, code)) {
        } else {
          groupedPairs[index] = cipher[code];
        }
      })
     return groupedPairs.join('');

    } 
        
    }
  return {
    polybius,
  };
})();

//polybiusModule.polybius('2345 33112351 4234 22112424514444', false)

module.exports = { polybius: polybiusModule.polybius };