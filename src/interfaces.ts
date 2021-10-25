export {};

type ObjectType = {
    name: string;
    age: number;
};

// typeと違い、Interface はイコールは不要
interface ObjectInterface {
    name: string;
    age: number;
}

let object: ObjectInterface = {
    name: 'Hoge',
    age: 38
};