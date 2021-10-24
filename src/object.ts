export {};

let profile1: object = { name: 'Hoge'};
profile1 = { birthYear: 1982 }; // 上書きできる、object型は制約が甘い

let profile2: {
    name: string;
} = { name: 'Hoge'};
profile2 = { name: 'Huga' };
