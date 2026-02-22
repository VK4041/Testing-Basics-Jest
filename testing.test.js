import testFunctions from "./testing.js";

test("Capitalize 'apple'", () => {
  expect(testFunctions.capitalize("apple")).toBe("Apple");
});
