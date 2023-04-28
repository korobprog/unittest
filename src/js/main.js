const heroes = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];
const sortHeroes = heroes.sort((a, b) => b.health - a.health);
const name = sortHeroes.name;
const health = sortHeroes.health;

/* 
Здоровье более 50 - зелёный;
Здоровье от 50 и до 15 - жёлтый;
Менее 15 - красный. 
*/

function calcLiving(name, health) {
  if (health > 51) {
    console.log(`${name}`, "healthy");
  } else if (health < 15) {
    console.log(`${name}`, "critical");
  } else {
    console.log(`${name}`, "wounded");
  }
}

calcLiving();
