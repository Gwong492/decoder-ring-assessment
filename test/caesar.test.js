// Write your tests here!
const { caesar } = require("../src/caesar.js");
const { expect } = require("chai");

describe("caesar()", () => {
    it("Should return false if shift amount is 0", () => {
        const actual = caesar("Scarlet", 0);
        expect(actual).to.be.false;
    })
    it("Should return false if shift amount is greater than 25", () => {
        const actual = caesar("Laila", 26);
        expect(actual).to.be.false;
    })
    it("Should return false if shift amount is less than -25", () => {
        const actual = caesar("Mari", -27);
        expect(actual).to.be.false;
    })
    it("Should encode a message message by shifting the letters", () => {
        const expected = "pdul";
        const actual = caesar("Mari", 3);
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces and other symbols as is", () => {
        const expected = "k nqxg octk 2";
        const actual = caesar("I love Mari 2", 2);
        expect(actual).to.equal(expected);
    })
    it("Should ignore capitol letters" , () => {
        const expected = "pdul";
        const actual = caesar("MARI", 3);
        expect(actual).to.equal(expected);
    })
    it("Should appropriately handle letters at the end of the alphabet", () => {
        const expected = "hjwtnni";
        const actual = caesar("Yankeez", 9);
        expect(actual).to.equal(expected);
    })
    it("Should allow for a negative shift that will shift to the left", () => {
        const expected = "zxzqrp";
        const actual = caesar("Cactus", -3);
        expect(actual).to.equal(expected);
    })
    it("Should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "message";
        const actual = caesar("phvvdjh", 3, false);
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces and other symbols as is" , () => {
        const expected = "the message!!";
        const actual = caesar("wkh phvvdjh!!", 3, false);
        expect(actual).to.equal(expected);
    })
    it("Should ignore capitol letters", () => {
        const expected = "capitol";
        const actual = caesar("fdslwro", 3, false);
        expect(actual).to.equal(expected);
    })
    it("Should appropriately handle letters at the end of the alphabet", () => {
        const expected = "the zs";
        const actual = caesar("wkh cv", 3, false);
        expect(actual).to.equal(expected);
    })
    it("Should allow for a negative shift that will shift to the left", () => {
        const expected = "message";
        const actual = caesar("jbppxdb", -3, false);
        expect(actual).to.equal(expected);
    })
})


