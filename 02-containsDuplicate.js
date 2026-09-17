/* 
Given an integer array nums, return true if any value appears at least twice, otherwise return false.
Don't sort the array. Target: Time: O(n); Space: O(n)
Examples: 
containsDuplicate([1, 2, 3, 1]) -> true
containsDuplicate([1, 2, 3, 4]) -> false
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) -> true
*/

function containsDuplicate(nums){
    const numberSet = new Set()
    for (const num of nums){
        if (numberSet.has(num)) return true
        numberSet.add(num)
    }
    return false
}