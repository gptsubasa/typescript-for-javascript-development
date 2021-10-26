export {};

enum Months {
    January = 1,    // 1から採番したい場合
    Febrary,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    Octover,
    November,
    December
};

console.log(Months.January);    // 1
console.log(Months.Febrary);    // 2
console.log(Months.December);   // 12

// JSで書こうと思ったら・・・
// const MonthsJS = {
//     January: 0,
//     Febrary: 1
// };

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008800',
    BLUE = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log(green);

// 無いプロパティを後から追加できる
enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}
