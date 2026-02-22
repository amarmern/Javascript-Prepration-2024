function twoSum(arr: number[], target: number): number[] {
  const map: Record<number, number> = {}; // key = value, value = index

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const complement = target - current;

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[current] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
