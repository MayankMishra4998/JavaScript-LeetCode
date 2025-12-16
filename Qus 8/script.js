// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]} 
 */
function map(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); 
  }

  return result;
}
