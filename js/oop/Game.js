class Game {
    constructor(name, hp, mp, weapen) {
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._weapen = weapen;
    }
    get name() {
        return this._name;
    }

    get hp() {
        return this._hp;
    }

    get mp() {
        return this._mp;
    }

    get weapen() {
        return this._weapen;
    }

    attack() {
        console.log(`${this.name}が攻撃しました`);
    }

    spell() {
        console.log(`${this.name}が呪文を唱えました`);
    }

    recovery() {
        console.log(`${this.name}のHPが回復しました`);
    }

    revived() {
        console.log(`${this.name}が蘇りました`);
    }

    beast() {
        console.log(`${this.name}が蘇りました`);
    }
}

let yuusya = new Game(
    '勇者',
    '200',
    '100',
    '剣'
);

let wizard = new Game(
    '魔法使い',
    '100',
    '50',
    '剣'
);

let cleric = new Game(
    'ヒーラー',
    '100',
    '50',
    '剣'
);

let berseker = new Game(
    'バーサーカー',
    '200',
    '100',
    '剣'
);