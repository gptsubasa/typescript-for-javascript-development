export {};

// 先頭文字は大文字
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Hoge',
    age: 38
};

type Profile = {
    name: string;
    age: number;
};

const example2: Profile = {
    name: 'Hoge',
    age: 38
};

// example1の型をProfile2として設定できる
type Profile2 = typeof example1;