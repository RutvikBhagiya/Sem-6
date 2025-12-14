function findMax(a, b, callback){
     console.log("First function called");
    let max = 0;
    if(a>b){
        max = a;
    }
    else{
        max = b;
    }
   
    callback(max);
}

function printMax(max){
    console.log("Max num: "+max);
}

findMax(2,3,printMax);