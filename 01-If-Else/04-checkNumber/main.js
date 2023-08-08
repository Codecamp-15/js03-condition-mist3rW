

let userNumb = prompt("Enter a number");

// alert(typeof(userNumb));
// console.log(typeof(userNumb), userNumb);
if (isNaN(userNumb)){
    alert("Invalid number");
}else if(userNumb > 0){
    alert("Positive number");
}else if(userNumb < 0){
    alert("Negative number");
}else{
    alert("Zero");
}