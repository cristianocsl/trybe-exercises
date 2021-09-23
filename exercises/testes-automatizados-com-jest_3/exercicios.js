function aleatorio() {
  return Math.floor(Math.random() * 101);
}

const stringUpC = (string) => string.toUpperCase;

const stringUpCFirst = (string) => string.charAt(0);

const stringConcat = (string1, string2) => `${string1}${string2}`;

module.exports = { aleatorio, stringUpC, stringUpCFirst, stringConcat };