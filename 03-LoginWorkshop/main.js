let user = prompt("Enter your username:");

if (user === null || user.trim(0)==''){
    user = "Guest";
    alert(`Welcome ${user}`)
}else if (user == "codecamp"){
    pass = prompt("Enter your password:");
    if (pass=="123456"){
        user = "codecamp";
        alert(`Welcome ${user}`)
    }else {
        alert("Wrong password");
    }
}else{
    user = "Guest";
    alert(`Welcome ${user}`)
}




