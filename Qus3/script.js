//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
let arrey = [1, 2, 3, 4, 5];
let answer = 6;
function twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    
}


// Example ran :-
console.log(twoSum(arrey,answer));
