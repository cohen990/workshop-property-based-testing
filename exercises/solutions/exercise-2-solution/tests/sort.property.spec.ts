import * as fc from "fast-check";
import { sort } from "../sorter";

test("every member of a sorted list is the same as or smaller than the next member", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = sort(array);
      if (sorted.length > 1) {
        for (var i = 0; i < array.length - 1; i++) {
          expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);
        }
      }
    })
  );
});

// bonus points
test("a sorted array is the same length as the original", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (arr) => {
      const sorted = sort(arr);
      expect(arr.length).toBe(sorted.length);
    }),
    { verbose: true }
  );
});

test("sorting an array is idempotent", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = sort(array);
      const sortedAgain = sort(sorted);
      expect(sorted).toStrictEqual(sortedAgain);
    })
  );
});

test("sorted array contains all the same elements as the original array", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = sort(array);
      for (var i = 0; i < array.length; i++) {
        var target = array[i];
        var arrayCount = countOf(target, array);
        var sortedCount = countOf(target, sorted);

        expect(arrayCount).toBe(sortedCount);
      }
    })
  );
});

function countOf(value: number, inArray: number[]): number {
  var count = 0;
  for (var i = 0; i < inArray.length; i++) {
    if (inArray[i] == value) {
      count += 1;
    }
  }

  return count;
}
