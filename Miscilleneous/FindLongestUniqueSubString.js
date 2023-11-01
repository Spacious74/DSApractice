function findLongestSubstring(str){

    console.log("");
    let max = 0;
    let m = new Map();
    let strArr = str.split("");

    let start = 0;
    let end = start;

    let index = [0,0];

    while(end < strArr.length){


        if(!m.has(strArr[end])){
            m.set(strArr[end], 1)
            end++;  
        }
        else{

            let currMapSize = m.size;
            if(currMapSize >= max){    
                max = end-start;
                index[0] = start;
                index[1] = end;
                m.clear();
                m.set(strArr[end],1);
            }
            start = end;
            end++;

        }
        if(end == strArr.length){
            if(m.size > max){
                max = m.size;
                index[0] = start;
                index[1] = end;
            }
        }
    }
    console.log("");
    console.log(strArr);
    index[1] -=1;
    console.log("max : ",index[1]-index[0]+1);
    console.log("index = ",index);

    let longestSubstring = "";
    for(let i = index[0]; i <= index[1]; i++){
        longestSubstring += strArr[i];
    }
    console.log(longestSubstring)

}

let string = 'ABCDDEFGGHIJKLMN';
findLongestSubstring(string);   



