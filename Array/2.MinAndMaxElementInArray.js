function findMinMax(arr) {

    let min = arr[0];
    let max = arr[0];
    let n = arr.length;
    
    if(n <= 0){
        return [-Infinity,Infinity];
    }else if(n === 1){           
        return [arr[0],arr[0]];
    }else if(n === 2){
        return [Math.min(arr[0],arr[1]),Math.max(arr[0],arr[1])];         
    }

    if (n > 2) {
        for (let i = 0; i < n; i++) {
            min = (arr[i] < min) ? arr[i] : min;
            max = (arr[i] > max) ? arr[i] : max;
        }
        return [min,max];
    }

}
let arr = [];
console.log(arr);
console.log("Min : ", findMinMax(arr)[0]);
console.log("Max : ", findMinMax(arr)[1]);

// MOST EFFIECIENT APPROACH
// const arr = [];

// const min = Math.min(...arr);
// const max = Math.max(...arr);

// console.log(arr);
// console.log(`Minimum value: ${min}`); // Output: Minimum value: 1
// console.log(`Maximum value: ${max}`);