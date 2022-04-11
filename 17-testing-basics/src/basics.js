const assert = require("assert");

assert.equal(2, 2, "Actual value does not match")

assert.notEqual(1, 2, "Actual should be equal to 2")

assert.deepEqual([1,2,3,4], [1,2,3,4], "Actual should be [1,2,3,4]")

assert.notEqual({}, {}, "Actual should be an object");

assert.doesNotMatch("Hello", /Hello/, "Actual should be 'Hello'")

