const { calcLiving } = require("../main.js");

const stroy = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

test("calcLiving enum ", () => {
  const calcLivingComparison = calcLiving(stroy);

  expect(calcLivingComparison).toEqual([
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ]);
});
