export {};

// overload を使用するにはsignatureを設定する必要がある
// 引数の型、戻り値の型を指定する
function double(value: number): number;
function double(value: string): string;

// 型の制約を行うのはsignature側なので、実態の型はanyでいい
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    // signatureで型制約が効いているのでelseifは不要
    // }else if (typeof value === 'string') {
    }else{
        return value + value;
    // signatureで型制約が効いているのでelseは必要ない
    // } else {
    //     throw 'numberでもstringでもないので、引数を確認してください。';
    }
}

// function double(value: string): string {
//     return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));