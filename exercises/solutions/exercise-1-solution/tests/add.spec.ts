import { add } from "../adder";

it("should add", () => {
  expect(add([1, 2])).toBe(3);
});

test("should blow up if exceeding javascripts max number", () => {
  expect(() => add([Number.MAX_VALUE, Number.MAX_VALUE])).toThrow();
});
