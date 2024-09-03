const calculate = (num1, num2, operation) => {
    // Helper function to check if a value is a number
    const isNumber = value => typeof value === 'number' && !isNaN(value);

    // Validate input numbers
    if (!isNumber(num1) || !isNumber(num2)) {
        return 'Error: Numbers must be valid numbers';
    }

    // Validate operation
    const validOperations = ['add', 'subtract', 'multiply', 'divide'];
    if (!validOperations.includes(operation)) {
        return 'Error: Invalid operation';
    }

    // Perform the operation
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Unknown operation';
    }
};

// Test cases
console.log(calculate(5, 3, 'add')); // 8
console.log(calculate(10, 2, 'divide')); // 5
console.log(calculate(5, 0, 'divide')); // Error: Division by zero
console.log(calculate(5, 'a', 'add')); // Error: Numbers must be valid numbers
console.log(calculate(5, 3, 'modulus')); // Error: Invalid operation
