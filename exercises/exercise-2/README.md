# Exercise 2 - Reversing a list

The goal of this exercise is to repair a bug in a sorting algorithm

Tests can be run with `npm run ex-2`

Take a look at `sorter.ts`. This is a more complicated bit of code. This is a quicksort I stole off the internet [here](https://felginep.github.io/2019-03-20/property-based-testing).

Take a look at `tests/sorter.spec.ts`. It has tests covering the code and those tests are passing.
The million dollar question is: How much do you trust those tests? How much do they really tell you about this arcane bit of code?

Actually if you were astute, you may have already spotted the bug in the sorter. If you did, please don't fix it yet :)

This time, I haven't provided you any property based tests. Just a mostly empty file. That file names one property of a sort algorithm.

- Every member of a sorted list is less than or equal to the next member of the list

## Exercise 2

- Implement the property based test in `sort.property.spec.ts`
- Fix the bug (optionally adding a new unit test case)

## Hints

- Check out `sorter.ts` line 2. Why is it returning the array if it's got less than 3 members?
- Try to follow through the code execution with a debugger or mentally

## Bonus points

- What other properties does a sorting algorithm have?
- Can you write a property based test for some of them?
