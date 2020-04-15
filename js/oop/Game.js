class Human {
    constructor(name, hp, mp) {
        this._name = name;
        this._hp = hp;
        this._mp = mp;
    }
    attack(target) {
        console.log(this.name, 'が', target, 'に攻撃した');
    }
}

class Yuusya extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
}

class Wizard extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
    castSpell(spellName, target) {
        console.log(this.name, 'が', target, 'に', spellName, 'の呪文を唱えた');
    }
}

class Cleric extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
    heal(target) {
        console.log(this.name, 'が', target, 'を回復した');
    }
}

class Berseker extends Human {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
    furryMode() {
        console.log(this.name, 'が獣化して攻撃力アップ');
    }
}

class Monster {
    constructor(name, hp, mp) {
        this._name = name;
        this._hp = hp;
        this._mp = mp;
    }
    attack(target) {
        console.log(this.name, 'が', target, 'に攻撃した');
    }

    runAwey() {
        console.log(this.name, 'は逃げ出した');
    }

}


class Slime extends Monster {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = "";
    }
    split() {
        console.log(this.name, 'が分身した')
    }
}

class Ork extends Monster {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
}

class LastBoss extends Monster {
    constructor(name, hp, mp, weapon) {
        super(name, hp, mp);
        this.weapon = weapon;
    }
    runAwey() {
        // console.log('このモンスターは逃げない')
    }

    revive() {
        console.log(this.name, 'はよみがえった')
    }
}

let boss = new LastBoss('LastBoss', 1000, 5000, 'ring');

let Yuusya = new Yuusya('シン', 500, 150, "やり");