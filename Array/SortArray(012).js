function sortArray(arr) {
    
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            tempArr.unshift(arr[i]);
        }else if(arr[i] === 1){
            tempArr.push(arr[i]);
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
            tempArr.push(arr[i]);
        }
    }
    console.log(tempArr);

}



// Another approach of this program - 
// function sortArray(arr) {
    
//     let l = 0;
//     let m = 0;
//     let r = arr.length-1;
//     while(m<=r){
//         if(arr[m] == 0){
//             [arr[l],arr[m]] = [arr[m],arr[l]];
//             l++; m++;
//         }else if(arr[m] == 1){
//             m++;
//         }else{
//             [arr[m],arr[r]] = [arr[r], arr[m]]
//             r--;
//         }
//     }
//     console.log(arr);

// }

let arr = [0,2,1,2,0];
let a = [3,4,5]
arr= [...a];
console.log(arr)
// sortArray(arr);