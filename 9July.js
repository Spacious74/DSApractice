function minimiseTheInteger(n, k)
{
    let digits = n.toString().split('');
    let lastVal = digits[digits.length - 1];
    console.log("Last value: " + lastVal);
    let i = 0;
    while(k > 0 && i < digits.length){

        if(i == 0 && digits[i]!== '1'){
            digits[i] = '1';
            k--;
        }else if(i > 0 && digits[i] !== '0'){
            digits[i] = '0';
            k--;
        }
        i++;

    }

    if(digits[digits.length - 1 ] == '0'){
        digits.pop();
        digits.push(lastVal);
    }
    console.log(digits);

    let minInt = digits.join('')
    console.log(Number(minInt));

}
minimiseTheInteger(23,2)