// a = [4,8,2,6,2]
// b = [4,5,4,1,3]


function findPairs(a,b){

    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < b.length; j++) {
            // (j > i) && console.log(i,j);
            if((j > i) && ((a[i]+a[j]) > (b[i] + b[j]))){
                counter++;
            }
        }
    }
    console.log("Total Pairs : " + counter);

}
a = [4,8,2,6,2]
b = [4,5,4,1,3]
findPairs(a,b);