function sortRecursively(array: number[]): number[] {
  if (array.length < 1) {
    return array;
  }

  var data = array;
  let pivot = data.pop()!; // apologies for the bang. It had to be done
  let left = data.filter((x) => x < pivot);
  let right = data.filter((x) => x >= pivot);
  return sortRecursively(left).concat([pivot]).concat(sortRecursively(right));
}

export function sort(array: number[]): number[] {
  /* cloning to avoid modifying the input array 
  (another bug I discovered whilst making the property based testing workshop :D) */
  const cloned = Object.assign([], array);

  return sortRecursively(cloned);
}
