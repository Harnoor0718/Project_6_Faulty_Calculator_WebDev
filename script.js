// Faulty Calculator
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let ch = prompt("Enter the operation to be performed");

let result;
let a = Math.random();

if (a < 0.1) {
    // Faulty logic (wrong results)
    if (ch === "+") {
        result = num1 - num2;
    } else if (ch === "*") {
        result = num1 + num2;
    } else if (ch === "-") {
        result = num1 / num2;
    } else if (ch === "/") {
        result = num1 ** num2;
    } else if (ch === "**") {
        result = num1 * num2;
    } else {
        result = "Invalid operator";
    }
    alert("🤖 Faulty result: " + result);
} else {
    // Correct logic
    if (ch === "+") {
        result = num1 + num2;
    } else if (ch === "-") {
        result = num1 - num2;
    } else if (ch === "*") {
        result = num1 * num2;
    } else if (ch === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else if (ch === "**") {
        result = num1 ** num2;
    } else {
        result = "Invalid operator";
    }
    alert("✅ Correct result: " + result);
}
