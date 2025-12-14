class DemoClass{
    name = "";
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    demoFunc(name) {
        console.log("Name: "+name);
    }
}

let obj = new DemoClass("Rutvik",20);
obj.demoFunc("Meet");
console.log(obj.age);