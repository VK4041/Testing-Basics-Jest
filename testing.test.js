import testFunctions from "./testing.js";

describe("Capitalize function", () => {
  test("Capitalize 'apple'", () => {
    expect(testFunctions.capitalize("apple")).toBe("Apple");
  });
  test("Capitalize 'banana'", () => {
    expect(testFunctions.capitalize("banana")).toBe("Banana");
  });
});
describe("Reverse String function", () => {
  test("Reverse 'apple' ", () => {
    expect(testFunctions.reverseString("apple")).toBe("elppa");
  });
});
