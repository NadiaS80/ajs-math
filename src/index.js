import './css/style.css';

import Daemon from './js/Daemon';
import Magician from './js/Magician';

const lines = [new Magician('Mage'), new Daemon('Daemon')].map((character) => {
  character.attack = 100;
  character.distance = 2;
  const attack = character.attack;
  character.stoned = true;

  return `${character.type}: ${attack} → ${character.attack} (stoned)`;
});

document.querySelector('#result').textContent = lines.join('\n');
