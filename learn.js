let person = prompt("Fill in your Login");
if(person) {
    if(person === "Admin") {
        let password = prompt("Fill in your password");
        if(password) {
            (password === "Admin") ? alert ("Hi!") :
            alert("Wrong password!");
        }
        else {
            alert("Cancelled!")
        }
    }
    else {
        alert("I don't know you");
    }
}
else {
    alert("Cancelled!");
}



