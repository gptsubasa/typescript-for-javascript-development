export {};

let name = 'Bob';
name = 'Alice';

let nickname = 'Bobby' as const;
// nickname = 'Alice'; // error => Type '"Alice"' is not assignable to type '"Bobby"'

// as const を書くことで、それぞれの属性にreadonly属性になる（ネストしていても一括でreadonlyになる）
let profile = {
    name: 'Bob',
    height: 180
} as const;

// profile.name = 'Alice'; // error => Cannot assign to 'name' because it is a constant or a read-only property.
// profile.height = 170;   // error => Cannot assign to 'height' because it is a constant or a read-only property.
