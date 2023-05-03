import calcLiving from "../main";
test.each([
  {
    name: "Лучник",
    health: 100,
    expected: "healthy",
  },

  {
    name: "Маг",
    health: 39,
    expected: "wounded",
  },
  {
    name: "Тролль",
    health: 12,
    expected: "critical",
  },
  {
    name: "Всадник",
    expected: "oops something goes wrong",
  },
  {
    name: "Пастух",
    health: "ого-го",
    expected: "oops something goes wrong",
  },
])("test", ({ name, health, expected }) => {
  const condition = calcLiving({ name, health, expected });
  expect(expected).toBe(condition);
  expect(expected).toEqual(condition);
});
