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
describe("Calculator Object", () => {
  test("Addition 10 + 15", () => {
    expect(testFunctions.calculator.add(10, 15)).toBe(25);
  });
  test("Subtraction 20 - 5", () => {
    expect(testFunctions.calculator.subtract(20, 5)).toBe(15);
  });
  test("Subtraction (negative diff) 2 - 32", () => {
    expect(testFunctions.calculator.subtract(2, 32)).toBe(-30);
  });
  test("Division 45/9", () => {
    expect(testFunctions.calculator.divide(45, 9)).toBe(5);
  });
  test("Division (by 0) 10/0 ", () => {
    expect(testFunctions.calculator.divide(10, 0)).toBe(undefined);
  });
  test("Multiply 10 x 5", () => {
    expect(testFunctions.calculator.multiply(10, 5)).toBe(50);
  });
});
describe("Caesar Cipher", () => {
  test("Cipher nothing", () => {
    expect(testFunctions.caesarCipher("", 10)).toBe("");
  });
  test("Cipher no shift", () => {
    expect(testFunctions.caesarCipher("apple", 0)).toBe("apple");
  });
  test("Regular: Cipher 'apple' by 3", () => {
    expect(testFunctions.caesarCipher("apple", 3)).toBe("dssoh");
  });
  test("Large: Cipher 'apple' by 102", () => {
    expect(testFunctions.caesarCipher("apple", 102)).toBe("ynnjc");
  });
  test("Negative: Cipher 'apple' by -5", () => {
    expect(testFunctions.caesarCipher("apple", -5)).toBe("vkkgz");
  });
  test("Wrapping: Cipher xyz by 3", () => {
    expect(testFunctions.caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Case Sensitive: Cipher HeLLo by 3", () => {
    expect(testFunctions.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("Punctuations: Cipher \'Hello, World!\' by 3", () => {
    expect(testFunctions.caesarCipher("Hello, World!", 3)).toBe(
      "Khoor, Zruog!",
    );
  });
});
