/*
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

*/

/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
var flat = function(arr, n) {
    function helper(currentArr, depth) {
        let result = [];
        for (let item of currentArr) {
            if (Array.isArray(item) && depth < n) {
                result.push(...helper(item, depth + 1));
            } else {
                result.push(item);
            }
        }
        return result;
    }
    return helper(arr, 0);
};



