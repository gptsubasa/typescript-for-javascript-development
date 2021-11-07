export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('Taro', 25);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;   // type Profile = [string, number]

const profile: Profile = ['Hoge', 30];
const hoge = new Person(...profile);
console.log(hoge);

type ConstructorParameters<
    T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
