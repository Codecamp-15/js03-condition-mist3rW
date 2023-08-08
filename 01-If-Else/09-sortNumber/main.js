let input1 = +prompt("Enter your first number:");
let input2 = +prompt("Enter your second number:");
let input3 = +prompt("Enter your third number:");

let firstNum,secondNum,thirdNum;

if (input1 >= input2 && input1 >= input3){
    firstNum = input1;
    if (input2 >= input3){
        secondNum = input2;
        thirdNum = input3;
    }else{
        secondNum = input3;
        thirdNum = input2;
    }
} else if (input2 >= input1 && input2 >= input3){
    firstNum = input2;
    if (input1 >= input3){
        secondNum = input1;
        thirdNum = input3;
    }else{
        secondNum = input3;
        thirdNum = input1;
    }
} else {
    firstNum = input3;
    if (input1 >= input2){
        secondNum = input1;
        thirdNum = input2;
    }else{
        secondNum = input2;
        thirdNum = input1;
    }
}

alert(`${firstNum}, ${secondNum}, ${thirdNum}`);