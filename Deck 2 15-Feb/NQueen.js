function isSafe(cArr, row , col){

    // horizontal
    for(let i = 0; i<cArr.length; i++){
        if(cArr[row][i] == 1){
            return false;
        }
    }

    // vertical
    for(let i = 0; i<cArr.length; i++){
        if(cArr[i][col] == 1){
            return false;
        }
    }

    // uperleft
    for(let i = row; i >=0 && col >=0; i--){
        if(cArr[i][col] == 1){
            return false;
        }
    }

    // lowerleft
    for(let i = row; i < cArr.length && col >= 0; i++, col--){
        if(cArr[i][col] == 1){
            return false;
        }
    }

    return true;


}



function printCombination(cArr, col){

    if(col == cArr.length-1){
        console.log(cArr);
        return;
    }

    for(let row = 0; row < cArr.length; row++){
        if(isSafe(cArr, row, col)){
            cArr[row][col] = 1;
            printCombination(cArr, row, col+1);
            cArr[row][col] = 0;
            return false;
        }
        
    }

}

let chessArr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]
let n = 0;

printCombination(chessArr, n);