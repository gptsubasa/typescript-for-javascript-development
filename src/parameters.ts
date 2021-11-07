export {};

const debugProfile = (name: string, age: number) => {
    console.log(`${name} is ${age} years old`);
};

debugProfile('John', 30);

type Profile = Parameters<typeof debugProfile>; // type Profile = [string, number]

const profile: Profile = ['Gloria', 78];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any
    ? P
    : never;
