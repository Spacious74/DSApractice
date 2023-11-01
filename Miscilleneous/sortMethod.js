let arr= [3,1,5,2,8,6];
let alhpArr = ["Banana", "Orange", "Apple", "Papaya"]

alhpArr.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    if(a==b){
        return 0;
    }
});

console.log(alhpArr);