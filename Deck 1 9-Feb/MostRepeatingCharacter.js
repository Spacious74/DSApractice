function checkFrequency(str){

    let strArr = str.split('');
    let obj = {};
    let max = strArr[0];

    for(let i=0; i<strArr.length; i++){

        if(!obj[strArr[i]]){
            obj[strArr[i]] = 1;
        }else{
            obj[strArr[i]] +=  1;
            if(obj[strArr[i]] > obj[max]){
                max = strArr[i];
            }
        }

    }

    console.log("")
    console.log("Most repeated char : ",max);

}
let string = "Relevel";
checkFrequency(string);

