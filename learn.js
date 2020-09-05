const person = prompt("Fill in your Login");

if (person) {
    if (person === "Admin") {
        const password = prompt("Fill in your password");
        password
            ? alert(password === "Admin" ? "Hi!" : "Wrong password!")
            : alert("Cancelled!");
    } else {
        alert("I don't know you");
    }
} else {
    alert("Cancelled!");
}