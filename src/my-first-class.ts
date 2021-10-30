export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `${this.name} is ${this.age} years old`;
    }
}
let taro = new Person('Taro', 20);
// let hanako = new Person();

console.log(taro.profile());
