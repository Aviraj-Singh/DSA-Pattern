/*
Given a sorted array: numbers = [2, 7, 11, 15] and target = 9

Return the 1-based indices of the two numbers that add up to target.

Expected: [1, 2]

Another: numbers = [2, 3, 4] and target = 6

Expected: [1, 3]

Complexity: O(n) time; O(1) extra space
*/

function twoSum2(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left+1, right+1];
        }

        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(twoSum2([2, 7, 11, 15], 9))