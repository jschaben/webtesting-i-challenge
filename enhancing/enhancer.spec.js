const { succeed, fail, repair } = require("./enhancer.js");
// test away!

let testItem = {};

it("should set item durability to 100", function() {
  testItem.durability = 60;
  const fixItem = repair(testItem);
  expect(fixItem.durability).toBe(100);
});

it("should increase item enhancement on success", function() {
  testItem.enhancement = 3;
  const upgrade = succeed(testItem);
  expect(upgrade.enhancement).toBe(4);
});

it("should decrease item durability on fail", function() {
  const newItem = {
    durability: 56,
    enhancement: 14
  };

  const newFail = fail(newItem);
  expect(newFail.enhancement).toBe(14);
  expect(newFail.durability).toBe(51);
});

it("should decrease item durability by 5 over level 15", function() {
  testItem = {
    enhancement: 15,
    durability: 32
  };
  const newFail = fail(testItem);
  expect(newFail.durability).toBe(22);
  expect(newFail.enhancement).toBe(15);
});

it("should decrease item durability and enhancement on items over level 16", function() {
  testItem = {
    durability: 84,
    enhancement: 17
  };
  const testFail = fail(testItem);
  expect(testFail.enhancement).toBe(16);
  expect(testFail.durability).toBe(74);
});