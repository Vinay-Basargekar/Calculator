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

let currentOperation = null;
let firstNumber = "";
let secondNumber = "";

button.forEach((button) => {
	button.addEventListener("click", () => {
		const buttonText = button.innerText;
		if (buttonText === "=") {
			if (currentOperation && secondNumber !== "") {
				displayBox.value = operate(
					currentOperation,
					parseFloat(firstNumber),
					parseFloat(secondNumber)
				);
				// Reset for next operation
				firstNumber = displayBox.value;
				secondNumber = "";
				currentOperation = null;
			}
		} else if (buttonText === "Clear") {
			// Clear the input on 'C' button click
			firstNumber = "";
			secondNumber = "";
			currentOperation = null;
			displayBox.value = "";
		} else if (
			buttonText === "+" ||
			buttonText === "-" ||
			buttonText === "*" ||
			buttonText === "/"
		) {
			if (!currentOperation) {
				currentOperation = buttonText;
				displayBox.value = ""; // Clear display for second number
			}
		} else {
			if (!currentOperation) {
				firstNumber += buttonText;
				displayBox.value = firstNumber;
			} else {
				secondNumber += buttonText;
				displayBox.value = secondNumber;
			}
		}
	});
});

let number1, number2, operator;

let operate = (operator, number1, number2) => {
	if (operator === "+") {
		return add(number1, number2);
	} else if (operator === "-") {
		return subtract(number1, number2);
	} else if (operator === "*") {
		return multiply(number1, number2);
	} else if (operator === "/") {
		return divide(number1, number2);
	}
};

let displayNumber = "";

button.forEach((button) => {
	button.addEventListener("click", () => {
		displayNumber = button.innerText;
	});
});
