function firstElementKTime(arr,n,k){
    //code here
    let m = new Map();

    for(let i=0; i<n; i++){
        if(!m.get(arr[i])){
            m.set(arr[i], 1)
        }else{
            let num = m.get(arr[i]);
            m.set(arr[i], num+1);
        }
    }
    
    console.log(arr)
    console.log(m);

    for(let i = 0; i < n; i++){ 

        let num = m.get(arr[i]);
        if(num >= k){
            return arr[i];
        }

    } 

    return -1;

}

let arr = 
// [5, 3, 4, 4, 4, 4, 4, 3, 1, 4,2, 1]
[4, 2, 2, 2, 3, 4, 4, 4, 3, 2]
// [3,1,2]
let k = 3;
console.log(firstElementKTime(arr, arr.length, k));;