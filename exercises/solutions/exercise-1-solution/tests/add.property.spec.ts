import * as fc from "fast-check";
import { add } from "../adder";

// properties of addition described here https://www.aaamath.com/pro74ax2.htm

/* I'm setting a maximum safe number here to avoid hitting javascripts limits
    (max/min value +/-9007199254740991)
    Writing an adder that can handler larger numbers is out of scope for this workshop */
const MaxSafeNumber = 10000000;

// a + b + c = c + b + a
test("should be commutative", () => {
  fc.assert(
    /* here I'm asking for an `fc.array` of `fc.integer`. 
    fast-check now knows that `arrayOfNumbers` is an array of integers.
    By default, fast-check will generate a list between 0 and 10 integers long,
    although this can be changed if desired */
    fc.property(fc.array(fc.integer(MaxSafeNumber)), (arrayOfNumbers) => {
      var added = add(arrayOfNumbers);
      var reversed = arrayOfNumbers.reverse();
      var commutated = add(reversed);

      expect(added).toEqual(commutated);
    })
  );
});

// (a + b) + c = (c + b) + a
test("should be associative", () => {
  fc.assert(
    fc.property(
      fc.integer(MaxSafeNumber),
      fc.integer(MaxSafeNumber),
      fc.integer(MaxSafeNumber),
      (a, b, c) => {
        var added = add([add([a, b]), c]);
        var associated = add([a, add([b, c])]);

        expect(added).toEqual(associated);
      }
    )
  );
});

// a + 0 = a
test("should have identity property", () => {
  fc.assert(
    fc.property(fc.integer(MaxSafeNumber), (a) => {
      add([a, 0]);

      expect(a).toEqual(a);
    })
  );
});

// a * (b + c) = (a * b) + (a * c)
test("should be distributive", () => {
  fc.assert(
    fc.property(
      /* because we're multiplying in this one, if we go too small and multiply by another small,
      we can overflow the negatives. So I've put a min and a max on this one */
      fc.integer(-MaxSafeNumber, MaxSafeNumber),
      fc.integer(-MaxSafeNumber, MaxSafeNumber),
      fc.integer(-MaxSafeNumber, MaxSafeNumber),
      (a, b, c) => {
        var first = a * add([b, c]);
        var second = add([a * b, a * c]);

        expect(first).toEqual(second);
      }
    )
  );
});
