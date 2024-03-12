const caesarModule = (function () {
  /*An array containing lowercase letters at each position*/
  const alphabet = [
    ['a'], ['b'], ['c'], ['d'], ['e'], ['f'], 
    ['g'], ['h'], ['i'], ['j'], ['k'], ['l'], 
    ['m'], ['n'], ['o'], ['p'], ['q'], ['r'],
    ['s'], ['t'], ['u'], ['v'], ['w'], ['x'],
    ['y'], ['z'],
  ]

  /*Variable containing an expanded alphabet array to allow for shifting beyond 
  the original alphabet using the spread operator*/
  const alphabetExt = [...alphabet, ...alphabet, ...alphabet];

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25) {return false}
    /*Create a map of the indexes of the corrisponding locations of letters 
    in the alphabetExt array and shifts the letters the appropriate amount*/
      let indexMap = [[]];
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === " ") {
          indexMap.push([]);
        } else {
          let k = indexMap.length;
          for (let j = 26; j < alphabetExt.length; j++) {
            let letter = alphabetExt[j];
            /*Conditional checking if a character is a special character or space*/
            if (input.codePointAt(i) > 122 || input.codePointAt(i) < 65) {
              indexMap[k - 1].push(char);
              break;
            } else if (char.toLowerCase() === letter.toString()) {
              /*Conditional checking wheather the message is encoding or decoding*/
              if (encode) {
                indexMap[k - 1].push(j + shift);
              break;
              } else {
                indexMap[k - 1].push(j - shift);
              break;
              }
            }
          }
        }
      }

      /*Takes the shifted index map and assigns the corrisponding letters 
      to the proper arrays while ignoring special characters*/
      indexMap.forEach((word, i) => {
        let map = indexMap[i];
        word.forEach((alphabetIndex, location) => {
          const char = alphabetIndex;
          if (typeof(char) !== 'number') {
          } else {
            map[location] = alphabetExt[alphabetIndex];
          }
        });
      });

      let encodedMessage = [];
      /*Adds the joined letters to an array and then again joined to 
      preserve spacing*/
      indexMap.forEach((word, index) => {
        encodedMessage.push(indexMap[index].join(""))
      })

       return encodedMessage.join(' ');  
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };