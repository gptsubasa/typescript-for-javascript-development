export {};

type DetaildProfile = {
    name: string;
    height: number;
    weight: number;
};

// 必要なプロパティのみ取り出して新たな型を作りたい場合
type SimpleProfile = Pick<DetaildProfile, "name" | "height">;

// Pick について
// K は keyof T => "name" "height" "weight" 出ないといけない
// extends => 型成約
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// 逆に要らない型を除外したい場合
type SmallProfile = Omit<DetaildProfile, "weight">;


