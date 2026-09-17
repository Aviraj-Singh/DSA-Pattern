/*
Given a string s, find the first character that occurs exactly once. Return its index. If no such character exists, return -1.
Target: O(n) time
Examples:

firstUniqChar("leetcode") -> 0 as l occurs once
firstUniqChar("loveleetcode") -> 2 as v occurs once
firstUniqChar("aabb") -> -1
*/

function firstUniqChar(word) {
    let charCounts = new Map()

    for (let char of word) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < word.length; i++) {
        if (charCounts.get(word[i]) === 1) {
            return i;
        }
    }
    
    return -1
}