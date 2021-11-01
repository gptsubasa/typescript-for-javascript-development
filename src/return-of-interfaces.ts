export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
    ionazun(): void;    // シグネチャ（実装部分はなし）
}

interface Senshi {
    kougeki(): void;    // シグネチャ（実装部分はなし）
}

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();