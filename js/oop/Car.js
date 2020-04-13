class Car {
    constructor(engine, color, name, type, maker) {
        this._engine = engine;
        this._color = color;
        this._name = name;
        this._type = type;
        this._maker = maker;
    }

    get maker() {
        return this._maker;
    }

    get name() {
        return this._name;
    }

    move() {
        console.log(`${this.name}が走りました`);
    }

    stop() {
        console.log(`${this.name}が止まりました`);
    }

    rearMove() {
        console.log(`${this.name}がバックしました`);
    }

    turn() {
        console.log(`${this.name}が${direction}に曲がりました`);
    }
}

let prius = new Car(
    'ハイブリッド',
    '赤',
    'プリウス',
    'セダン',
    'トヨタ',
);

let hiace = new Car(
    'ガソリン',
    '黒',
    'ハイエース',
    'バン',
    'トヨタ',
);

// console.log(prius);

// console.log(prius.maker);
// console.log(prius.name);

// console.log(prius);
// console.log(hiace);

// prius.move();
// prius.turn('右');
// prius.stop();

// hiace.rearMove();
// hiace.stop();
// hiace.turn('左');
// hiace.move();

class Truck extends Car {
    constructor(engine, color, name, type, maker) {
        super(engine, color, name, type, maker);
    }

    load() {
        console.log(`${this._name}が荷物を積みました`);
    }
    unload() {
        console.log(`${this._name}が荷物を下ろしました`);
    }
}

let truck = new Truck(
    'ディーゼル',
    '青',
    '2tトラック',
    'トラック',
    'Isuzu'
);

console.log(truck);

truck.move();
truck.stop();
truck.load();
truck.unload();