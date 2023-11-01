function isSafe(mat, x, y, n){
    if(mat[x][y] == 1 && x < n && y < n){
        return true;
    }
    return false;
}


function findPathOfRat(mazeMat, x, y, n, solMat){

    if(x == n-1 && y == n-1){
        solMat[x][y] = 1;
        return true;
    }

    if(isSafe(mazeMat, x, y, n)){
        solMat[x][y] = 1;
        if(findPathOfRat(mazeMat, x+1, y, n, solMat)){ 
            return true;
        }
        if(findPathOfRat(mazeMat, x, y+1, n, solMat)){
            return true;
        }
        solMat[x][y] = 0;
        return false;
    }

    return false;

}

let mazeMat = [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1],
]

let solMat = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

let n = mazeMat.length;
let ratX = 0, ratY = 0;

let result = findPathOfRat(mazeMat,ratX,ratY,n,solMat)
if(result){
    console.log(solMat);
}else{
    console.log("Path not found: \n",solMat);
}