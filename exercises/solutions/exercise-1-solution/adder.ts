export function add(numbers: number[]) {
  var result = 0;

  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  if (Number.isSafeInteger(result)) {
    return result;
  }

  throw "too big";
}
