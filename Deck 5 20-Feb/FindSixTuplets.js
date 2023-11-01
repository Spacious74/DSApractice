// Sixtuplets - combination of six values
// Problem – We need to find number of sextuplets 
// which satisfies the given equation -
// Equation -> ((a*b)+c)/d - e = f
// Manipulating equation - (a*b) + c = (f+e) * d
// Now we need to create two arrays one lhs and other one is rhs
// lhs me hum original array ke har ek element ko (a*b) + c is equation me solve
// krke lhs me store krenge
// aur same rhs me (f+e) *d is equation me rhs ke har ek element ko solve krke
// rhs me store krenge
// uske baad check krenge ki rhs me jo bhi values hai wo lhs me kitni bar aae hai
// aur use count me store krenge and count is the answer.

function findFirstandLastOcc(arr, ele){

    let l = 0,m;
    let r = arr.length - 1;
    let result = -1;
    while (l <= r) {

        m = l + Math.floor((r - l) / 2);

        if (arr[m] === ele) {
            result = m;
            r = m - 1;
        }
        if (ele > arr[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = arr.length - 1;
    let resultRight = -1;

    while (l <= r) {

        m = l + Math.floor((r - l) / 2);

        if (arr[m] === ele) {
            resultRight = m;
            l = m + 1;
        }
        if (ele < arr[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    if(result === -1 || resultRight === -1) {
        return 0;
    }else{
        return (resultRight - result)+1;
    }

}

function findSixtuplets(arr){

    let n = arr.length;
    let rhs = [];
    let lhs = [];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                rhs.push((arr[i]*arr[j]) + arr[k]);
                lhs.push((arr[i]+arr[j]) * arr[k]);
            }
        }
    }
    lhs = lhs.sort((a,b) => a-b);
    rhs = rhs.sort((a,b) => a-b);
    console.log("RHS : ", rhs )
    console.log("LHS : ", lhs )

    let count = 0;

    for(let i = 0; i< rhs.length; i++){
        let occ = findFirstandLastOcc(lhs, rhs[i]);
        count += occ;
    }
    console.log("Total occurences: " , count);

}
let arr = [2,3]
findSixtuplets(arr);