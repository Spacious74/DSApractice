function findMinMax(arr) {

    let min = arr[0];
    let max = arr[0];
    if(arr.length == 2) {
        if(arr[0] < arr[1]) {
            console.log("Min : " + arr[0]);
            console.log("Max : " + arr[1]);
        }else{
            console.log("Min : " + arr[1]);
            console.log("Max : " + arr[0]);
        }
        return ;
    }

    if (arr.length > 2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }

            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    console.log("Min : ", min);
    console.log("Max : ", max);

}
let arr = [2, 13, 23, 21, 34, 43];
console.log(arr);
findMinMax(arr);
// Min = 11
// Max = 45