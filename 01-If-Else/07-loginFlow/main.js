let input1 = prompt("Username:");
let input2 = prompt("Password:");

if(input1 == "admin" && input2 == "1234"){
    alert(`Hello ${input1}`);
}else if (input1 == "john" && input2 == "qwerty"){
    alert(`Hello ${input1}`);
}else if (input1 =="" && input2 ==""){
     alert("please enter your username and password");
}else if (input1 == ""){
    alert("username is required");
}else if (input2 == ""){
    alert("password is required");
}else{
    alert("Invalid username or password");
}