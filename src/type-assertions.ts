export {};

let name:any = 'Max';

// 型指定が無いと、any型で数値が入ってしまうため、より安全に型指定を行う
// typescriptのコンパイラだけでは自動で型を推論できない
// let length: number = name.length;

// [型アサーションその1] length を型指定しているので、any型ではなくnumber型になる
let length = name.length as number;

// [型アサーションその2] もう少し早い段階、nameに型アサーションを行うことで、型指定を行うことができる
let length = (name as string).length;

// [型アサーションその3] 推奨されていない記法
let length = (<string>name).length;

// length = 'Max';