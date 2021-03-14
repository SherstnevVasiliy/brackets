module.exports = function check(str, bracketsConfig) {
  let bracketItem = '' ;
  let i= 0;
  while (i < bracketsConfig.length) {
    bracketItem = bracketsConfig[i].join('');

      if (str.includes(bracketItem)) {
          str = str.replace(bracketItem,'');
          i = 0;
      } else {
          i += 1;
      }
  }

  return str.length === 0;
}
