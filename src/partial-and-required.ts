export {};

// ------------------------------------------------------------------------------
// Partial
// ------------------------------------------------------------------------------
// Profile型を用意
// type Profile = {
//     name: string;
//     age: number;
//     zipCode: number;
// };

// // optionalなプロパティを持つ方を定義したくなった場合（あまり良くない例）
// type Profile2 = {
//     name?: string;
//     age?: number;
// };

// // そこでpartial型を使うと、すべてのプロパティがoptionalになる
// // （メンテナンスコスタがかからない）
// type PartialType = Partial<Profile>;

// ------------------------------------------------------------------------------
// Partial and Required
// ------------------------------------------------------------------------------

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};

type PartialType = Partial<Profile>;    // すべてのプロパティがoptionalになる
type RequiredType = Required<Profile>;  // すべてのプロパティがrequiredになる

