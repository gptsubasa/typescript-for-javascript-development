export {};

function add(a:number, b:number){
    return a + b;
}

console.log(add(1, 2));

// 関数の戻り値の型を取り出して設定
type ReturnTypeFromAdd = ReturnType<typeof add>;    // number型

type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R
    ? R
    : any;

