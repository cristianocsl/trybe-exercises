const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

// função myRemove

function myRemove(arr, item) {
  let newArr = [];
  arr.forEach((current) => {
    if (item !== current) {
      newArr.push(current);
    }
  });
  return newArr;
}

// função myRemoveWithoutCopy

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

module.exports = { sum, myRemove, myRemoveWithoutCopy };