
let f0 = 0;
let f1 = 1;
const Fibonacci = [f0, f1];
for (i = 1; i<50; i++){
    Fibonacci.push(Fibonacci[i]+Fibonacci[(i-1)]);
}
console.log(Fibonacci);

function fibonacciNumber() {
    let userInput = parseInt(prompt("Enter the number of the Fibonacci sequence you wish to know."));
    if (isNaN(userInput)) {
        alert("Please enter a number");
    } else {
    alert(Fibonacci[userInput]);
    }
}

fibonacciNumber();
   