import Daemon from '../Daemon';
import Magician from '../Magician';

describe.each([
  ['Magician', Magician],
  ['Daemon', Daemon],
])('%s', (type, Character) => {
  let character;

  beforeEach(() => {
    character = new Character('Hero');
  });

  test('creates a character with the default attack at one cell', () => {
    expect(character).toMatchObject({ name: 'Hero', type, distance: 1 });
    expect(character.attack).toBe(10);
    expect(character.stoned).toBe(false);
  });

  test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
  ])('at %i cells deals %i damage with a base attack of 100', (distance, damage) => {
    character.attack = 100;
    character.distance = distance;

    expect(character.attack).toBe(damage);
  });

  test.each([
    [1, 100],
    [2, 85],
    [3, 72.07518749639422],
    [4, 60],
    [5, 48.39035952556319],
  ])('at %i cells deals %f damage while stoned', (distance, damage) => {
    character.attack = 100;
    character.distance = distance;
    character.stoned = true;

    expect(character.stoned).toBe(true);
    expect(character.attack).toBeCloseTo(damage, 10);
  });

  test('updates the base attack and removes the penalty when stoned is cleared', () => {
    character.distance = 2;
    character.stoned = true;
    character.attack = 50;
    expect(character.attack).toBe(40);

    character.stoned = false;
    expect(character.attack).toBe(45);

    character.distance = 1;
    expect(character.attack).toBe(50);
  });

  test('keeps damage at zero if the penalty exceeds the attack', () => {
    character.distance = 4;
    character.stoned = true;

    expect(character.attack).toBe(0);
  });
});
