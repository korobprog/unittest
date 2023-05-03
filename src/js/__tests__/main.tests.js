import calcLiving from "../app";

test.each([
  { name: "горила", health: 8, expected: "critical" },
  { name: "крокодил", health: 50, expected: "wounded" },
  { name: "герой", health: 88, expected: "healthy" },
])("test", ({ name, health, expected }) => {
  const condition = calcLiving({ name, health });
  expect(condition).toBe(expected);
  expect(condition).toEqual(expected);
});
