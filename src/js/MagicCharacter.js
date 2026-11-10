export default class MagicCharacter {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.attack = 10;
    this.stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const multiplier = (11 - this.distance) / 10;
    const attack = this._attack * multiplier;
    const penalty = this.stoned ? Math.log2(this.distance) * 5 : 0;

    return Math.max(0, attack - penalty);
  }

  set attack(value) {
    this._attack = value;
  }
}
