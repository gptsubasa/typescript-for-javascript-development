export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Max',
    age: 30,
};

me.age++;

console.log(me);

// すべてのプロパティを読み取り専用にする
type ReadonlyProfile = Readonly<Profile>;

const friend: ReadonlyProfile = {
    name: 'Manu',
    age: 29,
};

// friend.age++; // error!

type YomitoriSenyo<T> = {
    readonly[P in keyof T] : T[P];
};

type YomitorSenyoProfile = YomitoriSenyo<Profile>;
