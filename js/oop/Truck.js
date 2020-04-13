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

let truck = new Truck();

console.log(truck);