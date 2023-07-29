function calculateSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

// Example usage:
const startNumber = 1;
const endNumber = 10;
const result = calculateSum(startNumber, endNumber);
console.log("The sum between", startNumber, "and", endNumber, "is:", result);
