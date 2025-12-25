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
