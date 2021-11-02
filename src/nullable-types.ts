export {};

// let profile: {name: string; age: number} = {
//     name: 'John',
//     age: null       // tsconfig の "strictNullChecks": true, によりエラーになる
// };

// age に nullを許容したい場合、union型で局所的に対応する
let profile: {name: string; age: number | null} = {
    name: 'John',
    age: null
};
