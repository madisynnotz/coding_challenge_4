// Task 1: If Statements
let purchaseAmount = 215; // purchase amount
let finalAmount = purchaseAmunt; //after discount

if (purchaseAmount > 150) {
    fianlAmount -= purchaseAmount * .12; // Apply discount
}

console.log(`Final amount after discount: $${finalAmount}`);

//Task 2: For Loop
let sales = [100, 95, 300, 250, 80]; // array of sales figures
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
let orders = [101, 102, 103]; //array of order IDs

orders.forEach(order => {
    console.log(`Processing order ID: ${order}`);
});

//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let amount = 1000; // Example amount
let taxRate = 0.07; // Example tax rate (7%)

let tax = calculateTax(1000, 0.07);
console.log(`Tax: $${tax}`);

//Task 9: Function Expressions
const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
};

let price = 100; // Example price
let discountPercentage = 13; // Example discount (13%)

let discountedPrice = applyDiscount(100, 10);
console.log(`The final price after a $${discountPrice}}`);

//Task 10: Arrow Functions
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
}

let purchaseAmount = 75; // Example purchase amount

let pointsEarned = calculatePoints(purchaseAmount);
console.log(`For a purchase of $${purchaseAmount}, you earned ${pointsEarned} loyalty points.`);
