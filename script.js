function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}
let displayBox = document.querySelector("input");
let button = document.querySelectorAll("button");

// let currentOperation = null;
let firstNumber = "";
let secondNumber = "";
let operator = "";

let operate = (operator,firstNumber,secondNumber) => {
	let result;
	switch(operator){
		case "+":
			result = add(firstNumber,secondNumber);
			break;
		case "-":
			result = subtract(firstNumber,secondNumber);
			break;
		case "*":
			result = multiply(firstNumber,secondNumber);
			break;
		case "/":
			result = divide(firstNumber,secondNumber);
			break;
		default:
			break;
	}
	// console.log(result);
	return result;
}

