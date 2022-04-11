// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum, div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })

    it("SHould return 0 if number 1 is supplied as 0", () => {
        const result = div(0, 100);
        assert.equal(result, 0, "Actual should be 0")
    })

    it("SHould return 0 if number 2 is supplied as 0", () => {
        const result = div(100,0);
        assert.equal(result, 0, "Actual should be 0")
    })

    it("Should return 5 if divide 30 by 6", () => {
        const result = div(30,6);
        assert.equal(result, 5, "Actual should be 5");
    })
})