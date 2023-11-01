function checkAnagram(str1, str2){

    let str1Arr = str1.split('');
    let str2Arr = str2.split('');

    if(str2Arr.length != str1Arr.length){
        console.log(str1, str2, " are not Anagram Strings");
        return;
    }

    for(let i = 0; i < str1Arr.length; i++){

        if(str2Arr.includes(str1Arr[i])){
            let index = str2Arr.indexOf(str1Arr[i]);
            str2Arr.splice(index, 1);
        }
        
    }

    console.log("");

    if(str2Arr.length === 0){
        console.log(str1, str2, " are Anagram Strings");
    }else{
        console.log(str1, str2, "are Not Anagram Strings");
    }

}

checkAnagram("race", "care");