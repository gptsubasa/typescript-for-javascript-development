export {};

class VisaCard {
    // readonly owner: string;

    // constructor(owner: string) {
    //     this.owner = owner;
    // }

    // readonlyを付けると、プロパティに代入できなくなる
    constructor(public readonly owner: string) {}

    // readonlyということはpublicが前提、publicを省略して記述することができる
    // constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('John');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Bob'; // Error!

