'use strict';
let current = 1;
const target = 13;

function way(target) {
  function findNumber(current, intermediateValue) {
    if (current === target) {
      return intermediateValue;
    }
    if (current > target) {
      return null;
    }

    const multiple = findNumber(current * 3, `(${intermediateValue} * 3)`);

    const add = findNumber(current + 5, `(${intermediateValue} + 5)`);

    return multiple || add;
  }
  const result = findNumber(1, '1');

  return result ? result : null;
}

console.log(way(target));
