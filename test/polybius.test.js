// Write your tests here!
const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

describe("polybius()", () => {
    it("Should encode a message by translating each letter to number pairs", () => {
        const expected = "23513434112251";
        const actual = polybius("Message");
        expect(actual).to.equal(expected);
    })
    it("Should translate 'i' and 'j' to 42", () => {
        const expected = "42";
        const actual = polybius("i");
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces as is", () => {
        const expected = "443251 23513434112251";
        const actual = polybius("The message");
        expect(actual).to.equal(expected);
    })
    it("Should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "message";
        const actual = polybius("23513434112251", false);
        expect(actual).to.equal(expected);
    })
    it("Should translate 42 to both 'i' and 'j'", () => {
        const expected = "i/j";
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces as is", () => {
        const expected = "the message";
        const actual = polybius("443251 23513434112251", false);
        expect(actual).to.equal(expected);
    })
    it("Should return false if the length of all numbers is odd", () => {
        const actual = polybius("423", false);
        expect(actual).to.be.false;
    })
})
