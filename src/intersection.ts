export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    // throwingSpeed: 154,  // error になる
    battingAverage: 0.367
};

// batter1 と pitcher1の型を含む型を定義するのは愚直・・
// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };

// 複数の型を&で組み合わせて新たな型を定義できる ⇒ インターセクション型
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
};
