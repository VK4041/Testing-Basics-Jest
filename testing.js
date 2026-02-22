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
export default testFunctions = {
  capitalize,
  reverseString,
};
