let n = Number(prompt("Please, fill in the number"));
simple :
for (let i = 2; i < n; i++) {
    for (let a = 2; a < i; a++) {
        if (i % a === 0) continue simple;
    }
    alert (i);
}