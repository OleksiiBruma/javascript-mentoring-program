export const isLatinLettersAndDigits = string => /^[A-Za-z0-9]+$/.test(string);
export const isLatinLetters = string => /^[a-zA-Z]+$/.test(string);
export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
