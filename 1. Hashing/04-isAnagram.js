/*
Given two strings s and t, determine whether t is an anagram of s. Target: Time: O(n); Space: O(k)
An anagram contains exactly the same characters with exactly the same frequencies.

Examples:

isAnagram("anagram", "nagaram") -> true
isAnagram("rat", "car") -> false
isAnagram("listen", "silent") -> true
*/

function isAnagram(word1, word2){
    if (word1.length !== word2.length) return false
    const wordCount = new Map()
    for (let i=0; i<word1.length; i++){
        wordCount.set(word1[i], (wordCount.get(word1[i]) || 0) + 1)
        wordCount.set(word2[i], (wordCount.get(word2[i]) || 0) - 1)
    }
    for (count of wordCount.values()){
        if (count !== 0){
            return false
        }
    }
    return true
}