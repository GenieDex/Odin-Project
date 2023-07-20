let num1;
let num2;

function sum(num1,num2){
    
    return (num1 + num2);
}

function substract(num1,num2){

    return (num1 - num2);
}

function multiply (num1,num2){

    return (num1 * num2);
}

function divide (num1,num2){

    return (num1 / num2);
}

function power (num1){
    return (num1*num1);
}

function factorial (num1){
    let factorial;
    for (i=0;i<num1;i++){
        factorial+=i;
    }   
    return factorial+num1;
}

function allClear(){

    num1 = 0;
    num2 = 0;
}
