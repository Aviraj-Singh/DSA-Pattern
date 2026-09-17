/*
Given an array of strings, group the anagrams together.

Example: ["eat", "tea", "tan", "ate", "nat", "bat"] -> Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
Time: O(n × k log k); Space is roughly: O(n × k)

MindMap: 
STRING -> create canonical representation -> use representation as Map key -> group strings with same key
*/

function groupAnagrams(strs) {
    const stringMap = new Map()
    for (const str of strs){
        const key = str.split('').sort().join('')
        if (stringMap.has(key)){
            stringMap.get(key).push(str)
        } else{
            stringMap.set(key, [str])
        }
    }
    return Array.from(stringMap.values())
}