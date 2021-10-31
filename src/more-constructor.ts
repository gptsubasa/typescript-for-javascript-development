export {};

class Person {
    // public name: string;
    // protected age: number;

    // constructorの引数にアクセス修飾子をつけると、初期化処理を行うことができる
    constructor(public name: string, protected age: number) {
        // this.name = name;
        // this.age = age;
    }
}

const me = new Person('Hoge', 30);
console.log(me);