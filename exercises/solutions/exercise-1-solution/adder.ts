export function add(numbers: number[]) {
  var result = 0;

  // fix was here. Instead of just adding the first 2 elements, we are using the whole array
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  if (Number.isSafeInteger(result)) {
    return result;
  }

  throw "too big";
}
