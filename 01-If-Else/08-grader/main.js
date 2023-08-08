let score = +prompt("Enter your score");

if (score >= 80 && score < 101) {
    alert("A");
} else if (score >= 70 && score < 80) {
    alert("B")
} else if (score >= 60 && score < 70) {
    alert("C")
} else if (score >= 50 && score < 60) {
    alert("D")
} else if (score < 50 && score >= 0) {
    alert("F")
}else {
    alert("Invalid score");
}