/*
Given: nums = [2, 7, 11, 15] and target = 9

Return the indices of two numbers whose sum equals target.

Expected: [0, 1]
*/

function twoSum(nums, target) { 
    let numberSet = new Map() 
    for (let i=0; i<nums.length; i++){ 
        const current = nums[i] 
        const compliment = target - current 
        if (numberSet.has(compliment)){ 
            return [numberSet.get(compliment), i] 
        } 
        numberSet.set(current, i) 
    } 
    return [] 
}