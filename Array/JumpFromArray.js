function minimumJumps(arr,n){

   if(n === 0 || arr[0] === 0){
    return -1;
   }

   
   for(let i = 0; i < n; i++){

       let val = arr[i];
       let tempArr = [];

        for(let j = i; j <= val; j++){
            tempArr.push(arr[j]);
        }
        console.log(tempArr);

   }

}
let arr = [1, 3, 5, 4, 0, 2, 2, 0, 1]
let n = arr.length;
minimumJumps(arr,n);