export {};

class Person {
    public name: string;
    // private age: number;
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `${this.name} is ${this.age} years old`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `${this.name} is ${this.age} years old, nationality: {$this.nationality}`;
    }
}

let taro = new Person('Taro', 20, 'Japan');

console.log(taro.name);

