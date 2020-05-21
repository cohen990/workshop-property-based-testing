import { sort } from "../sorter";

it("should sort", () => {
  expect(sort([1, 2, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
});

it("should be ok with just 1 number", () => {
  expect(sort([1])).toEqual([1]);
});

it("should be ok with empty array", () => {
  expect(sort([])).toEqual([]);
});
