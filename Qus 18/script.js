/*
Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result. If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/



/**
 * @param {Function} fn - The asynchronous function to wrap
 * @param {number} t - Time limit in milliseconds
 * @return {Function} - A new function with time limit applied
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Set up timeout rejection
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Run the original function
            fn(...args)
                .then((res) => {
                    clearTimeout(timer); // clear timeout if resolved in time
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timer); // clear timeout if rejected in time
                    reject(err);
                });
        });
    };
};
