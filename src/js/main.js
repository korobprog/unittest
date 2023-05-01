const heroes = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

const stroy = heroes
  .sort((a, b) => b.health - a.health)
  .map((item) => {
    calcLiving(item);
  });

function calcLiving(stroy) {
  if (stroy.health > 51) {
    console.log("healthy");
  } else if (stroy.health < 15) {
    console.log("critical");
  } else {
    console.log("wounded");
  }
  return;
}

module.exports = {
  calcLiving,
};
