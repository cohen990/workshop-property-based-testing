# Exercise 1 - a simple adder

Tests can be run with `npm run exercise-1`

Take a look at `adder.ts`. It kinda works but there are edge cases you may be able to spot. Please do not fix it yet.

Take a look at `tests/add.spec.ts`. It's a typical unit test file. Although, arguably, somebody didn't add enough unit tests. Guess that makes this legacy code. Luckily for you, I've added a couple of property based tests that can help us find out if there are any edge cases.

The property based tests are in `tests/add.property.spec.ts`. They deal with the 4 defining properties of addition.

Properties of addition can be seen in more detail [here](https://www.aaamath.com/pro74ax2.htm) but they consist of the following.

- Commutative: a + b = b + a
- Associative: (a + b) + c = a + (b + c)
- Identity: a + 0 = a
- Distributive: a _ (b + c) = (a _ b) + (a \* c)

I've codified these properties as property based tests. Take a moment to read through to code and understand what it's doing.

In property based testing, you aren't testing specific situations (5 + 9 = 14) but instead you're asserting the actual behaviour of a module.

We're using a library called [`fast-check`](https://github.com/dubzzz/fast-check) but any library will do the same. It will generate a whole bunch of sample cases and throw these into the property test you've defined.

So if I want to test the Identity property, I'll ask fast-check to generate a whole bunch of different numbers, Often, these libraries are smart enough to focus on specific areas that are likely to cause issues. 0, max int, min int, negatives etc etc.

If you run `npm run exercise-1` now, you'll see that the unit tests are all passing. But the property based tests are able to see situations the original developer never anticipated.

You might see output that looks like this. I've added comments to explain what's going on

```
 Property failed after 1 tests
 { seed: 2106471559, path: "0:2:3:5:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4:4", endOnFailure: true }

 Counterexample: [[1,0,0]] /* this is your counterexample. It's the numbers it found that violate the property */

 Shrunk 30 time(s) /* shrinking is how fast-check simplifies the example. The original example may have been [123423324235123456596546, 213495120591230945, 1203512395123] */

 Got error: Error: expect(received).toEqual(expected) // deep equality

 Expected: 1
 Received: 0

 Stack trace: Error: expect(received).toEqual(expected) // deep equality

 Expected: 1
 Received: 0
```

So, the property based test has failed for the commutative property. Looks like there's a bug that the original developer hadn't anticipated.

## Exercise 1

- Write a new unit test to cover the failed case
- Implement the improved behaviour to fix the bug
- Rerun the tests and see that hopefully, it's passed

## Extra random point

Whilst writing this exercise, I discovered that javascript's implementation of number has a silent failure if it overflows. I added code to prevent that happening as I felt it was outside the scope of the exercise, but it is a perfect example of the power of property based testing.
