export {};

const kansu = ():number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// // unknown型に対して10を足す　⇒　type error
// let sumUnknown = numberUnknown + 10;

// number型の場合のみ計算
if(typeof numberUnknown === 'number'){
    let sumUnknown = numberUnknown + 10;
}

