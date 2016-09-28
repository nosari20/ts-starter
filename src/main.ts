export class HelloTS {
    constructor(){};

    sayHello(){
        return 'hello';
    }
}

let hello: HelloTS = new HelloTS();
console.log(hello.sayHello());
