function minimizeInteger(integer, K) {

    const digits = integer.toString().split('');
    // Change the digits from left to right
    let i = 0;
    while (K > 0 && i < digits.length) {
      if (i === 0 && digits[i] !== '1') {
        // Change the digit to '1' if it is not already '1'
        digits[i] = '1';
        K--;
      } else if (i > 0 && digits[i] !== '0') {
        // Change the digit to '0' if it is not already '0'
        digits[i] = '0';
        K--;
      }
      i++;
    }
  
    // Join the digits and convert back to an integer
    const result = parseInt(digits.join(''));
    return result;

}
let integer = 2399;
let r = minimizeInteger(integer, 2);
console.log(r);
