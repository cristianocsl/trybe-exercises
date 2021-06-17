function aleatorio() {
  return Math.floor(Math.random() * 101);
}

const stringUpC = (string) => string.toUpperCase;

const stringUpCFirst = (string) => {
  // return string.substring(0, 1).toUpperCase().concat(string.substring(1))
  const firstUppC = `${string[0].toUpperCase()}${string.slice(1)}`;
  return firstUppC;
}

const stringConcat = (string1, string2) => `${string1}${string2}`;

module.exports = { aleatorio, stringUpC, stringUpCFirst, stringConcat };