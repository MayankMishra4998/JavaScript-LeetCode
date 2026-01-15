# JavaScript-LeetCode

# Easy Type's Question's 

# Qus 1 :- 
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

# Qus 2 :- 
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

# Qus 3 :-
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# Qus 4 :- 
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

# Qus 5 :- 
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

# Qus 6 :- 
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

# Qus 7:- 
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:
=> arr[i] - number from the arr
=> i - index of arr[i]

# Qua 8 :-
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

# Mid Level Type's Question's 

# Qus 9 :-

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

# Qus 10 :- 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Qus 11 :- 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

# Qus 12 :- 
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
# Qus 13 :- 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

# Qus 14 :- 
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.

# Qus 15 :- 
Write a generator function that returns a generator object which yields the fibonacci sequence.
The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

# Qus 16 :-
Sometimes you have a long running task, and you may wish to cancel it before it completes. To help with this goal, write a function cancellable that accepts a generator object and returns an array of two values: a cancel function and a promise.

You may assume the generator function will only yield promises. It is your function's responsibility to pass the values resolved by the promise back to the generator. If the promise rejects, your function should throw that error back to the generator.

If the cancel callback is called before the generator is done, your function should throw an error back to the generator. That error should be the string "Cancelled" (Not an Error object). If the error was caught, the returned promise should resolve with the next value that was yielded or returned. Otherwise, the promise should reject with the thrown error. No more code should be executed.

When the generator is done, the promise your function returned should resolve the value the generator returned. If, however, the generator throws an error, the returned promise should reject with the error.

An example of how your code would be used:

function* tasks() {
  const val = yield new Promise(resolve => resolve(2 + 2));
  yield new Promise(resolve => setTimeout(resolve, 100));
  return val + 1; // calculation shouldn't be done.
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
If instead cancel() was not called or was called after t=100ms, the promise would have resolved 5.

# Qus 17 :- 

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

# Qus 18 :- 

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".


# Qus 19 :- 
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.


# Qus 20 :- 
Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.


# Qus 21 :- 
Write a function createHelloWorld. It should return a new function that always returns "Hello World".





