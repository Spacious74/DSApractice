function groupAnagram(wordArr){

    console.log("");
    let m = new Map();

    let newAr= [];

    for(let i = 0; i < wordArr.length; i++){ 

        let str = wordArr[i].split('').sort().join('');

        if(!m.has(str)){
            m.set(str, [wordArr[i]]);
        }else{
            let temp = m.get(str);
            temp.push(wordArr[i]);
        }


    }
    console.log(m);

}
let wordArr = ['cat','dog','tac','god','act'];
groupAnagram(wordArr);
