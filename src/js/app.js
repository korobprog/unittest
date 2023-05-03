const heroes = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

let stroy = heroes
  .sort((a, b) => b.health - a.health)
  .map((item) => {
    calcLiving(item);
  });

export default function calcLiving(stroy) {
  const { health } = stroy;
  if (health > 51) {
    return "healthy";
  } else if (health <= 50 && health >= 15) {
    return "wounded";
  }
  if (health < 15 && health >= 0) {
    return "critical";
  }
  return null;
}
