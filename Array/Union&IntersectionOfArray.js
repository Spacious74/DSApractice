function findUnionIntersection(arr1,arr2){

    arr1.push(...arr2)
    let s = new Set(arr1);
    let arr = Array.from(s);
    console.log("Union of arrays : ",arr);

    

}
let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3];
findUnionIntersection(arr1, arr2)
