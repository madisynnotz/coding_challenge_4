// Task 1: If Statements
let purchaseAmount = 215; // Example value
let discount = 0.2; // 12% discount

if (purchaseAmount > 150) {
    purchaseAmount -= purchaseAmount * discount; // Apply discount
}

console.log(`Final amount after discount: $${purchaseAmount.toFixed(2)}`);