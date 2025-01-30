// Task 1: If Statements
let purchaseAmount = 215; // Example value
let discount = 0.2; // 12% discount

if (purchaseAmount > 150) {
    purchaseAmount -= purchaseAmount * discount; // Apply discount
}

console.log(`Final amount after discount: $${purchaseAmount.toFixed(2)}`);

//Task 2: For Loop
let sales = [100, 95, 300, 250, 80]; // Example sales figures
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Add each sale to totalSales
}

console.log(`Total sales: $${totalSales}`);

//Task 3: While Loop
let stock = 10; // Initial stock value

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Decrease stock by 1
}

console.log("Stock is now depleted.");

//Task 4: Do...While Loop
let responses = 0; // Initial response count

do {
    console.log(`Collected responses: ${responses}`);
    responses++; // Simulate collecting a response
} while (responses < 3);

console.log("Survey complete. All responses collected.");

//Task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

//Task 6: For...Of Loop
let products = ["Car", "Wheel", "Tires"]; // Example product names

for (let product of products) {
    console.log(`Product: ${product}`);
}

//Task 7: forEach() Method
let orders = [101, 102, 103]; // Example order IDs

orders.forEach(order => {
    console.log(`Processing order ID: ${order}`);
});

//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let amount = 100; // Example amount
let taxRate = 0.07; // Example tax rate (7%)

let tax = calculateTax(amount, taxRate);
console.log(`The calculated tax on $${amount} at a ${taxRate * 100}% rate is $${tax.toFixed(2)}`);