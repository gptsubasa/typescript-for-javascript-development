export {};

// タプル型は順序にも制約を課す（ユニオン型は順序までは制約を課さない）
let profile: [string, number] = ['Hoge', 38];

// profile = [38, 'Hoge'];
