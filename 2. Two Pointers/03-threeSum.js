/*
Given: nums = [-1, 0, 1, 2, -1, -4]
Return all unique triplets that sum to 0. Order doesn't matter.

Expected: [[-1, -1, 2], [-1, 0, 1]]
Target:O(n²) time.

MindMap: 3Sum = Fix one number + solve Two Sum using two pointers.
fix one number -> Sort the remaining -> walk through it
Skipping duplicates is essential
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b)

    const result = []

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate fixed values
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ])

                // Skip duplicate left values
                while (
                    left < right &&
                    nums[left] === nums[left + 1]
                ) {
                    left++
                }

                // Skip duplicate right values
                while (
                    left < right &&
                    nums[right] === nums[right - 1]
                ) {
                    right--
                }

                left++
                right--

            } else if (sum < 0) {
                left++

            } else {
                right--
            }
        }
    }

    return result
}