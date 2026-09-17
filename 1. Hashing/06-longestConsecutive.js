/*
Given: nums = [100, 4, 200, 1, 3, 2]

The longest consecutive sequence is: 1, 2, 3, 4 -> Answer: 4

Another: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

Longest sequence: 0,1,2,3,4,5,6,7,8 -> Answer: 9

Although there is a nested while loop, we only enter it for numbers that are the beginning of a sequence. 
Once we find a sequence start, we traverse that sequence once. 
Every number is therefore processed a constant number of times overall, giving O(n) average time.
*/

function longestConsecutive(nums) {
    const numberSet = new Set(nums)
    let maxCount = 0
    for (const num of numberSet){
        if (!numberSet.has(num-1)){
            let currentNum = num
            let currentCount = 1
            while (numberSet.has(currentNum+1)){
                currentNum+=1
                currentCount+=1
            }
            maxCount = Math.max(maxCount, currentCount)
        }
    }
    return maxCount
}