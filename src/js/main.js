const heroes = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

heroes.sort((a, b) => b.health - a.health);
const stroy = heroes.map((item) => {
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

calcLiving(stroy);

module.exports = {
  calcLiving,
};
