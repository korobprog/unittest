const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

heroes.sort((a, b) => {
  if (a.health > b.health) {
    return 1;
  }
  if (a.health < b.health) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});
