// Two SUM learning project
// @Author: Christopher Staub   

// Function that finds two numbers in an array that add up to target
function twoSum(nums, target) {
    // Step 1: We'll need to look at each number in the array

    for (let i = 0; i < nums.length; i++) {
        console.log(`Looking at number: ${nums[i]}`);
        
        // Step 2: For each number, we'll need to find its complement
        // (complement = target - current number)
        const complement = target - nums[i];    
        console.log(`Looking for complement: ${complement} (${target} - ${nums[i]})`);
        
        // Step 3: If we find the complement in the array, return both numbers
        if (nums.includes(complement)) {
            console.log(`Found a solution! ${nums[i]} + ${complement} = ${target}`);
            return [nums[i], complement];
        }
        console.log('No match found with this number, trying next number...\n');
    }
    
    // Step 4: If no solution is found, return null or appropriate message
    return "No two numbers found that add up to " + target;
}

// Example test case
let numbers = [8, 7, 11, 15];
let target = 9;
console.log('Testing with array:', numbers, 'and target:', target);
console.log('Result:', twoSum(numbers, target));