// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Start with input x, apply functions from right to left
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};
