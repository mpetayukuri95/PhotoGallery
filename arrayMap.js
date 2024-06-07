function hasSubarrayWithSum(arr, target) {
    // Initialize the hashmap to store cumulative sums and their indices
    let cumulativeSumMap = new Map();
    let cumulativeSum = 0;
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Update the cumulative sum
        cumulativeSum += arr[i];
        
        // Check if the cumulative sum equals the target
        if (cumulativeSum === target) {
            return true;
        }
        
        // Check if there is a previous cumulative sum that matches the current cumulative sum minus target
        if (cumulativeSumMap.has(cumulativeSum - target)) {
            return true;
        }
        
        // Store the cumulative sum with its index if it hasn't been seen before
        if (!cumulativeSumMap.has(cumulativeSum)) {
            cumulativeSumMap.set(cumulativeSum, i);
        }
    }
    
    // If no subarray found
    return false;
}

