function pow(x,n) {
    let result = x;
    for (let a = 1; a < n; a++) {
        result = result * x;
    }
    return result;
}

alert(pow(+prompt("fill in the number"),+prompt("fill in the power")));
