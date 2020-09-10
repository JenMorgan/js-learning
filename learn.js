const equalDigit = (num1, num2, num3) => {
    if (num1 < 0 || num2 < 0 || num3 < 0) { 
      return false;
    }
    return num1 % 10 === num2 % 10 || 
           num2 % 10 === num3 % 10 ||
           num1 % 10 === num3 % 10;
  }
