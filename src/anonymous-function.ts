export {};

// 無名関数に対する「: (height: number, weight: number) => number」までが型推論
let bmi: (height: number, weight: number) => number = function (height: number, weight: number): number {
    return weight / (height * height);
}

console.log(bmi(1.75, 69));