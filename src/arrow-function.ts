export {};

let bmi: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number  => {
    return weight / (height * height);
}

// // return が1行の場合は下記省略形で記述できる
// let bmi: (height: number, weight: number) => number = (
//     height: number,
//     weight: number
// ): number => weight / (height * height);



console.log(bmi(1.75, 69));
