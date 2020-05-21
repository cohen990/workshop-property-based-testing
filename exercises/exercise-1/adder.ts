export function add(numbers: number[]) {
  const result = numbers[0] + numbers[1];

  if (Number.isSafeInteger(result)) {
    return result;
  }

  throw "too big";
}
