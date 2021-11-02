export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // any

// any型はstring型と互換性がある
fooCompatible = barCompatible;

// any型はstring型を代入されるとstring型になる
console.log(typeof fooCompatible); // string

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性がない場合はコンパイルエラーになる
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字列リテラル型を文字列型に変換　⇒　文字列リテラル型は文字列型の一部なので互換性がある
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値リテラル型を数値型に変換　⇒　数値リテラル型は数値型の一部なので互換性がある
let fooNumber: number;
let fooNumberLiteral: 1982 = 1982;
fooNumber = fooNumberLiteral;


// Animalというインターフェースを定義、Personというクラスを定義
interface Animal {
    age: number;
    name: string;
}
class Person {
    constructor(public age: number, public name: string) {}
}

// オブジェクトを代入できるかどうかは、それぞれのオブジェクトがどのような型を持っているかによって決まる
let me: Animal;
me = new Person(38, 'Taro');