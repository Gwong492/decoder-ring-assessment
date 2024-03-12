// Write your tests here!
const { ceasar } = require("../src/polybius.js");
const { expect } = require("chai").expect

describe("ceasar()", () => {
    it("Should return false if shift amount is 0", () => {
        const actual = ceasar("Mari", 0)
        expect(actual).to.be.false
    })
    it("Should return false if shift amount is greater than 25", () => {
        const actual = ceasar("Mari", 26)
        expect(actual).to.be.false
    })
    it("Should return false if shift amount is less than -25", () => {
        const actual = ceasar("Mari", -27)
        expect(actual).to.be.false
    })
    it("Should encode a message message by shifting the letters", () => {
        const expected = "pdul"
        const actual = ceasar("Mari", 3)
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces and other symbols as is", () => {
        const expected = "j nqxg octk 2"
        const actual = ceasar("I love Mari 2", 2)
        expect(actual).to.equal(expected)
    })
    it("Should ignore capitol letters" , () => {
        const expected = "pdul"
        const actual = ceasar("Mari", 3)
        expect(actual).to.equal(expected)
    })
    it("Should appropriately handle letters at the end of the alphabet", () => {
        const expected = ""
        const actual = ceasar("", )
        expect(actual).to.equal(expected)
    })
    it("Should allow for a negative shift that will shift to the left", () => {
        const expected = ""
        const actual = ("", -3)
        expect(actual).to.equal(expected)
    })
    it("Should decode a message by shifting the letters in the opposite direction", () => {
        const expected = ""
        const actual = ceasar("", )
        expect(actual).to.equal(expected)
    })
    it("Should leave spaces and other symbols as is" , () => {
        const expected = ""
        const actual = ceasar("", 3)
        expect(actual).to.equal(expected)
    })
    it("Should ignore capitol letters", () => {
        const expected = "";
        const actual = ceasar("", )
        expect(actual).to.equal(expected)
    })
    it("Should appropriately handle letters at the end of the alphabet", () => {
        const expected = "";
        const actual = ceasar("", );
        expect(actual).to.equal(expected);
    })
    it("Should allow for a negative shift that will shift to the left", () => {
        const expected = "";
        const actual = ceasar("", );
        expect(actual).to.equal(expected)
    })
})


