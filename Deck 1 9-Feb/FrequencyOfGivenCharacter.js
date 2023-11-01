function checkFrequency(str, ch){

    let strArr = str.split('');

    if(!strArr.includes(ch)){
        console.log(ch, "not found in", str);;
        return;
    }

    let obj = {};
    for(let i=0; i<strArr.length; i++){
        if(!obj[strArr[i]]){
            obj[strArr[i]] = 1;
        }else{
            obj[strArr[i]] +=  1;
        }
    }
    console.log("");
    console.log(str);
    for (const key in obj) {
        if(key === ch){
            console.log(ch, "occured", obj[key], "times in " + str);
            return;
        }
    }

}
let string = "unacademy";

let char = "a";
checkFrequency(string, char);