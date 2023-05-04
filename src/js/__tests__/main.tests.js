import calcLiving from "../app";

test.each([
  { name: "горила", health: 8, expected: "critical" },
  { name: "крокодил", health: 50, expected: "wounded" },
  { name: "герой", health: 88, expected: "healthy" },
  { name: "герой", health: 51, expected: "healthy" },
])(`%s test %i`, ({ name, health, expected }) => {
  const condition = calcLiving({ name, health });
  expect(condition).toBe(expected);
  expect(condition).toEqual(expected);
});
