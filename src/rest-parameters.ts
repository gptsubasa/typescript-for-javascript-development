export {};

const reducer = (previousValue: number, currentValue: number) => {
    console.log({previousValue, currentValue});
    return previousValue + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
    // return values.reduce((acc, value) => acc + value, 0);
};

console.log(sum(1, 2, 3, 4, 5));

// [1, 2, 3, 4, 5].reduce(reducer);