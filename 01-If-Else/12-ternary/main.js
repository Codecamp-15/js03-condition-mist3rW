let score = prompt("Enter your score:");

let grade = score >= 80 && score < 101 
? alert("A") : score >= 70 && score < 80
? alert("B") : score >= 60 && score < 70
? alert("C") : score >= 50 && score < 60
? alert("D") : score < 50 && score >= 0
? alert("F") : alert("Invalid score");