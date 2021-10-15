import {
    capitalize,
    reverseString,
    calculator,
    cipher } from "./funcs";

// capitalize

test("capitalizes string lowercase", () => {
    expect(capitalize("asd")).toBe("Asd")
});

test("capitalizes string uppercase", () => {
    expect(capitalize("ASD")).toBe("Asd")
});

test("capitalizes string mixed", () => {
    expect(capitalize("aSDaTFa")).toBe("Asdatfa")
});

// reverseString

test("reverses string normal", () => {
    expect(reverseString("asd")).toBe("dsa")
});

test("reverses string the same", () => {
    expect(reverseString("aaa")).toBe("aaa")
});

test("reverses string with uppercase letters", () => {
    expect(reverseString("BetBan")).toBe("naBteB")
});

// calculator

test("adds correctly", () => {
    expect(calculator.add(1, 2)).toEqual(3)
});

test("adds correctly with negative nums", () => {
    expect(calculator.add(-1, 2)).toEqual(1)
});

test("subtracts correctly", () => {
    expect(calculator.subtract(3, 1)).toEqual(2)
});

test("subtracts correctly with negative nums", () => {
    expect(calculator.subtract(-1, 2)).toEqual(-3)
});

test("divides correctly", () => {
    expect(calculator.divide(6, 2)).toEqual(3)
});

test("divides correctly with negative nums", () => {
    expect(calculator.divide(6, -2)).toEqual(-3)
});

test("multiplies correctly", () => {
    expect(calculator.multiply(4, 2)).toEqual(8)
});

test("multiplies correctly with negative nums", () => {
    expect(calculator.multiply(4, -2)).toEqual(-8)
});

// Ceaser Cipher

test("ciphers normal string", () => {
    expect(cipher("abc", 1)).toMatch("bcd")
});

test("ciphers string with punctuation and numbers", () => {
    expect(cipher("abc.9", 1)).toMatch("bcd.9")
});

test ("ciphers full sentance", () => {
    expect(cipher("Hello, John!", 2)).toMatch("Jgnnq, Lqjp!")
});

test ("ciphers from z to a", () => {
    expect(cipher("Zaz", 3)).toMatch("Cdc")
});