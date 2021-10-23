export {};

let numbers: number[] = [1, 2, 3];

// 別の書き方（非推奨）
// let numbers2: Array<number> = [1, 2, 3];
// let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];

let response: {
    'code': number;
    'data': number[];
} = {
    'code': 300,
    'data': [1, 2, 3]
};

console.log(response);

