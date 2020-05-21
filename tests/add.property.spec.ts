import * as fc from "fast-check";
import { add } from "../src/index";

// properties of addition described here https://www.aaamath.com/pro74ax2.htm

// a + b + c = c + b + a
test("should be commutative", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (arrayOfNumbers) => {
      var added = add(arrayOfNumbers);
      var reversed = arrayOfNumbers.reverse();
      var permutated = add(reversed);

      expect(added).toEqual(permutated);
    })
  );
});

// (a + b) + c = (c + b) + a
test("should be associative", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
      var first = add([add([a, b]), c]);
      var second = add([add([c, b]), a]);

      expect(first).toEqual(second);
    })
  );
});

// a + 0 = a
test("should have identity property", () => {
  fc.assert(
    fc.property(fc.integer(), (a) => {
      add([a, 0]);

      expect(a).toEqual(a);
    })
  );
});

// a * (b + c) = (a * b) + (a * c)
test("should be distributive", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
      var first = a * add([b, c]);
      var second = add([a * b, a * c]);

      expect(first).toEqual(second);
    })
  );
});
