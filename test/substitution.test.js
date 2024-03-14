// Write your tests here!
const { substitution } = require("../src/substitution.js");
const { expect } = require("chai");

describe("substitution()", () => {
    it("Should return false if the substitution alphabet is missing", () => {
        const actual = substitution("Message", "");
        expect(actual).to.be.false;
    })
    it("Should return false is the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("message", "qwertyuiop");
        expect(actual).to.be.false;
    })
    it("Should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitution("Message", "bnmbnmbnmbnmbnmbnmbnmbnmbn");
        expect(actual).to.be.false
    })
    it("Should encode a message by using the given substitution alphabet", () => {
        const expected = "dtllqut";
        const actual = substitution("Message", "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    })
    it("Should work with any kind of key with unique characters", () => {
        const expected = "dtll!ut";
        const actual = substitution("Message", "!wertyuiopasdfghjklzxcvbnm");
        expect(actual).to.equal(expected);
    })
    it("Should preserve spacing", () => {
        const expected = "zit dtll!ut";
        const actual = substitution("The message", "!wertyuiopasdfghjklzxcvbnm")
        expect(actual).to.equal(expected)
    })
    it("Should decode a message by using the given substitution alphabet", () => {
        const expected = "message";
        const actual = substitution("dtll!ut", "!wertyuiopasdfghjklzxcvbnm", false)
        expect(actual).to.equal(expected)
    })
    it("Should work with any kind of key with unique charcters", () => {
        const expected = "message";
        const actual = substitution("dtll!ut", "!wertyuiopasdfghjklzxcvbnm", false)
        expect(actual).to.equal(expected)
    })
    it("Should preserve spacing", () => {
        const expected = "the message";
        const actual = substitution("zit dtll!ut", "!wertyuiopasdfghjklzxcvbnm", false)
        expect(actual).to.equal(expected)
    })
})
