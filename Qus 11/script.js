// Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    // Compare prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Shrink prefix until it matches the start of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};
