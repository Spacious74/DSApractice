function findDuplicate(arr){

    let obj = {}
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = (!obj[arr[i]])? 1: obj[arr[i]]+=1;
    }
    console.log(obj);
    for (const key in obj) {
        if(obj[key] > 1){
            console.log(Number(key), " is repeated.");
            break;
        }
    }

}
let arr = [1,3,4,2,2]
findDuplicate(arr)