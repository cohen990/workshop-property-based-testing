import { sort } from "../sorter";

it("should sort", () => {
  expect(sort([1, 2, 4, 5, 3])).toStrictEqual([1, 2, 3, 4, 5]);
});

it("should sort a short list", () => {
  expect(sort([0, -1])).toStrictEqual([-1, 0]);
});

it("should be ok with just 1 number", () => {
  expect(sort([1])).toStrictEqual([1]);
});

it("should be ok with just 1 number", () => {
  expect(sort([0])).toStrictEqual([0]);
});

it("should be ok with empty array", () => {
  expect(sort([])).toStrictEqual([]);
});
