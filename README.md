# Math (log/trig)

[![CI](https://github.com/NadiaS80/ajs-math/actions/workflows/ci.yml/badge.svg)](https://github.com/NadiaS80/ajs-math/actions/workflows/ci.yml)

`Magician` и `Daemon` используют общий расчёт урона. Свойство `distance` задаёт расстояние в клетках и начинается с 1. Запись в `attack` задаёт базовую атаку, а чтение возвращает урон на текущем расстоянии с учётом `stoned`.

```sh
npm ci
npm run lint
npm run coverage -- --runInBand
npm run build
```
