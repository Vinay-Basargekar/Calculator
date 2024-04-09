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

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

let operate = (operator, num1, num2) => {
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			return divide(num1, num2);
		default:
			return "";
	}
};

let button = document.querySelectorAll("button");
let display = document.querySelector(".output");

button.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.textContent === "Clear") {
			display.textContent = "";
			firstNumber = "";
			secondNumber = "";
			operator = "";
			result = "";
		} else if (
			button.textContent === "+" ||
			button.textContent === "-" ||
			button.textContent === "*" ||
			button.textContent === "/"
		) {
			if (firstNumber !== "") {
				operator = button.textContent;
				display.textContent += button.textContent;
			}
		} else if (button.textContent === "=") {
			if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
				result = operate(
					operator,
					parseFloat(firstNumber),
					parseFloat(secondNumber)
				);
				display.textContent = result;
				firstNumber = result;
				secondNumber = "";
				operator = "";
			}
		} else {
			display.textContent += button.textContent;
			if (operator === "") {
				firstNumber += button.textContent;
			} else {
				secondNumber += button.textContent;
			}
		}
	});
});
