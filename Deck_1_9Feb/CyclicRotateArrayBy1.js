function rotateArray(arr, noOfRotation){

    console.log(arr)

    // ANTICLOCKWISE ROTATION
    
    // for(let i = 1; i<= noOfRotation; i++){
    //     arr.unshift(arr.pop());  
    // }
    // console.log(arr);

    // CLOCKWISE ROTATION

    for(let i = 1; i<= noOfRotation; i++){
        arr.push(arr.shift());
    }
    console.log(arr);

}

let arr = [1,2,3,4,5];
let rotateBy = 1;
rotateArray(arr, rotateBy);
