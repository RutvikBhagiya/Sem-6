let arr = [1,2,3,4,5];

function findMaxMinAvg(a){
    let max = a[0];
    let min = a[0];
    let sum = 0;

    for(num of arr){
        if(max < num){
            max = num;
        }
        if(min > num){
            min = num;
        }
        sum += num;
    }
    let avg = sum/arr.length;

    return [max,min,avg];
}

let [max,min,avg] = findMaxMinAvg(arr);
console.log("Max:"+max+" Min:"+min+" Avg:"+avg)

let obj = {
    "name" : "Rutvik",
    "age" : 18,
    "rollno" : 636
};

let {name,age} = obj;
console.log("Name: "+name+" Age: "+age);