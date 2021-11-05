export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;

// keyof で記述すると　union型の文字列を取り出す
// type PropertyTypes = "name" | "age"
type PropertyTypes = keyof Profile;

// 既存の型を拡張する事ができる（新しい方を作ることができる）⇒ Mapped Types
type Optional<T> = {
    [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;