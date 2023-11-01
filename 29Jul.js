function checkBike(tyres){

    let isBikeManu = false;
    if(tyres%4 === 2){
        isBikeManu  = true;
    }

    if(isBikeManu){
        console.log("YES")
    }else{
        console.log("NO")
    }

}

let tyres = 134;
checkBike(tyres);