const capitalize = (string) => {
  return string.at(0).toUpperCase().concat(string.slice(1));
};
const reverseString = (string) => {
  return Array.from(string)
    .reduce((acc, char) => {
      return [char, ...acc];
    })
    .join("");
};
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? undefined : a / b),
};

const caesarCipher = (string, shift) => {
  shift %= 26;
  let newStr = "";
  if (!shift) return string;
  for (const char of string) {
    let tempChar = char;
    //Only cipher the alphabets
    if (/[a-zA-Z]/.test(char)) {
      let start;
      let end;
      if (/[a-z]/.test(char)) {
        start = 97;
        end = 122;
      } else {
        start = 65;
        end = 90;
      }
      let shiftedCode = char.charCodeAt() + shift;
      shiftedCode =
        shiftedCode > end
          ? (shiftedCode % end) + start - 1 //1 less because start from first charCode
          : shiftedCode < start
            ? shiftedCode + 26
            : shiftedCode;
      tempChar = String.fromCharCode(shiftedCode);
    }
    //Concat together into newStr
    newStr = newStr.concat(tempChar);
  }
  return newStr;
};

const analyseArray = (array) => {
  if (!array.length) return {};
  if (array.length === 1)
    return {
      average: array[0],
      min: array[0],
      max: array[0],
      length: 1,
    };
  return {
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    average: array.reduce((sum, val) => sum + val) / array.length,
  };
};
export default testFunctions = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyseArray,
};
