let input1 = prompt("Enter a number 1#:");
let input2 = prompt("Enter a number 2#:");

if (isNaN(input1 + input2)){
    alert("Invalid number");
}else{
    alert(Number(input1) + Number(input2));
}
