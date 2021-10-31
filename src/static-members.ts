export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'John';
    static lastName: string = 'Doe';

    static work() {

        return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

// static変数にはクラス名からアクセスすることが出来る（インスタンス生成の必要がない）
console.log(Me.isProgrammer);
console.log(Me.work());
