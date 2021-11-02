export {};

// 宣言時、nameは決まっていないので ? を設定
let profile: { name?: string } = {};

profile.name = 'Max';
// 後から変数を追加したいケースの場合、エラーとなってしまう
// profile.age = 30;       // ただしageは宣言されていないのでエラーになる


// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

let profile2: { [ index: string ]: string | number } = {};

profile2.name = 'Max';
profile2.age = 30;
profile2.nationality = 'Japan';


// 更にインデックスシグネチャをインターフェースに定義してスッキリさせる方法も
interface Profile {
    name: string;           // 必須のプロパティの場合は記述
    underTwenty: boolean ;  // 必須のプロパティの場合は記述
    [ index: string ]: string | number | boolean;
}

let profile3: Profile = { name: 'Max', underTwenty: true };
profile3.name = 'Max';
profile3.age = 30;
profile3.nationality = 'Japan';

