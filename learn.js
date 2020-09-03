let a = prompt("Fill in the first number");
let b = prompt("Fill in the second number");
if(a === "" || b === "") {
    alert("One of the numbers is missing");
}
else {
    let result = ((Number(a) + Number(b)) < 4) ? 'Too little' : "Too much";
    alert(result);
}

