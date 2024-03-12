// Write your tests here!
const { polybius } = require("../src/polybius.js")
const { expect } = require("chai").expect

describe("polybius()", () => {
    it("Should encode a message by translating each letter to number pairs", () => {
        const expected = ""
        const actual = polybius("")
        expect(actual).to.equal(expected)
    })
    it("Should translate 'i' and 'j' to 42", () => {
        const expected = 42;
        const actual = polybius("i")
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces as is", () => {
        const expected = ""
        const actual = polybius("")
        expect(actual).to.equal(expected)
    })
    it("Should decode a message by translating each pair of numbers into a letter", () => {
        const expected = ""
        const actual = polybius("")
        expect(actual).to.equal(expected)
    })
    it("Should translate 42 to both 'i' and 'j'", () => {
        const expected = ""
        const actual = polybius("")
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces as is", () => {
        const expected = ""
        const actual = polybius("")
        expected(actual).to.equal(expected)
    })
    it("Should return false if the length of all numbers is odd", () => {
        const expected = ""
        const actual = polybius("")
        expect(actual).to.equal(expected)
    })
})
