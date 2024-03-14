const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // if substitution alphabet is not 26 characters return false
    if (!alphabet || alphabet.length !== 26) return false;
    //unique characters only
    for (let i = 1; i < alphabet.length; i++) {
      for (let j = 0; i < alphabet.length; i++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    let result = "";
    const alph = [
    "a","b","c","d","e","f",
    "g","h","i","j","k","l",
    "m","n","o","p","q","r",
    "s","t","u","v","w","x",
    "y","z",
  ];
    input = input.toLowerCase();

    if (encode) {
      //keep spaces/characters the same
      for (let i = 0; i < input.length; i++) {
        if (!alph.includes(input[i])) {
          result += input[i];
        } else {
          //get index of
          let subIndex = alph.indexOf(input[i]);
          result += alphabet[subIndex];
        }
      }
      return result;
    }

    if (!encode) {
      //keep spaces/characters the same
      for (let i = 0; i < input.length; i++) {
        if (!alphabet.includes(input[i])) {
          result += input[i];
        } else {
          let index = alphabet.indexOf(input[i]);
          result += alph[index];
        }
      }
      return result;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

