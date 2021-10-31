export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public name: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person('Max');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('Osakan');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'James', 'Jordan');
console.log(michael);
