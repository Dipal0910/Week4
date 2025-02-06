// Function to calculate square
function calculateSquare() {
    let numberInput = document.getElementById("numberInput").value;
    let outputElement = document.getElementById("output");

    if (numberInput === "") {
        outputElement.innerText = "Please enter a number.";
        return;
    }

    let number = parseFloat(numberInput);
    let squaredNumber = number * number;

    outputElement.innerText = `The square of ${number} is ${squaredNumber}`;
}

// Attach event listener to button
document.getElementById("calculateBtn").addEventListener("click", calculateSquare);