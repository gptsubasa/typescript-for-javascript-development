export {};

// やってることは同じで型が違うだけのものを何とか纏めたい場合にジェネリクスの記法を用いてまとめる
// const echo = (arg: number):number => {
//     return arg;
// };

// const echo = (arg: string): string => {
//     return arg;
// }


// ジェネリクス関数を定義 : Tは抽象的な型、慣例的にTを使う場合が多い
const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));
console.log(echo<number[]>([1, 2, 3]));

// クラスにジェネリクスを使う場合
class Mirror<T> {
    constructor(public value: T) { }

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello').echo());
console.log(new Mirror<boolean>(true).echo());
console.log(new Mirror<number[]>([1, 2, 3]).echo());
