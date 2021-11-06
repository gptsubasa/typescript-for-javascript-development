import { SourceMap } from "module";

export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// ----------------------------------------------------------------------------
// Exclude
// ----------------------------------------------------------------------------

// SomeTypes から特定の型を除外したいケースを考える
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// function ⇒ 関数の型の総称 を除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// ----------------------------------------------------------------------------
// Extract
// ----------------------------------------------------------------------------

// SomeTypes から DebugType のみを抜き出し
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtract2 = Extract<SomeTypes, Function>;

// ----------------------------------------------------------------------------
// NonNullable
// ----------------------------------------------------------------------------

// undefined を除きたい場合
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;     // string | number
