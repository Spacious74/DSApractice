function findFirstNonRepetingCharacter(str){

    let strArr = str.split("");
    let obj = {};
    for(let i=0; i<strArr.length; i++){
        if(!obj[strArr[i]]){
            obj[strArr[i]] = 1;
        }else{
            obj[strArr[i]] += 1;
        }
    }

    for (const key in obj) {
        if(obj[key] === 1){
            console.log(key , "is first non repeting character");
            return;
        }
    }


}
let str = "unacaudnemy"
findFirstNonRepetingCharacter(str);