export {};

// let profile: {name: string; age: number} = {
//     name: 'John',
//     age: null       // tsconfig の "strictNullChecks": true, によりエラーになる
// };

let profile: {name: string; age: number | null} = {
    name: 'John',
    age: null
};
