'use strict';

const target = 12;
// debugger
function way(target) {
  function findNumber(current = 1, intermediateValue = '1') {
    if (current === target) {
      return intermediateValue;
    }
    if (current > target) {
      return null;
    }

    return (
      findNumber(current + 5, `(${intermediateValue} + 5)`) ||
      findNumber(current * 3, `(${intermediateValue} * 3)`)
    )
  }
  return findNumber()
}
console.log(way(target));
