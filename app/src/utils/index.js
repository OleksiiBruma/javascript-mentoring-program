export const isLatinLettersAndDigits = string => /^[A-Za-z0-9]+$/.test(string);
export const isLatinLetters = string =>  /^[a-zA-Z]+$/.test(string);

export const timeConvert = n => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours
    ? rhours + " hour(s) and " + rminutes + " minute(s)"
    : rminutes + " minute(s)";
};
