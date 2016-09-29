export class HelloTS {
    constructor(){};

    sayHello(){
        return 'Hellow World !';
    }
}

let hello: HelloTS = new HelloTS();
console.log(hello.sayHello());
