export class HelloTS {
    constructor(){};

    sayHello(){
        return 'Hello World !';
    }
}

let hello: HelloTS = new HelloTS();
console.log(hello.sayHello());
