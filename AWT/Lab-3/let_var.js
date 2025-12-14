let a = 1;
var b = 2;
console.log("a:"+a+"b:"+b);
function demoFunc(){
    let a = 3;
    var b = 4;
    {
        let a = 5;
        var b = 6;
        console.log("Inside inner function a:"+a+"b:"+b);

    }
    console.log("Inside function a:"+a+"b:"+b);
}
demoFunc();
console.log("Out side function a:"+a+"b:"+b);