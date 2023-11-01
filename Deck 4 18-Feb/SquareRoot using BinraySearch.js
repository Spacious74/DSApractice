function findSquareRoot(num){

    let l = 1;
    let r = num;
    let m 
    while( l <= r){
        m = l + Math.floor((r-l)/2);
        console.log(m)

        if(m*m === num){
            return m;
        }

        if( m*m > num){
            r = m-1;
        }else{
            l = m+1;
        }
    }
    return r;
}

function makeMorePrecise(num, pre, integer){

    let factor = 1;
    let ans = integer;

    for(let i = 0; i < pre; i++){

        factor = factor/10;
        for(let j = ans ; j*j < num; j=(parseFloat(j)+parseFloat(factor)).toFixed(pre)){
            ans = j;
        }

    }
    return ans;

}

let num = 10;
let intNum = findSquareRoot(num);
console.log("√",num , " = ", intNum);
let precision =  4;
console.log(precision, " more precised : ", makeMorePrecise(num, precision, intNum));