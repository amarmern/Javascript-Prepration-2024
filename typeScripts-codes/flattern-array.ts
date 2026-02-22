type NestedArray<T> = (T | NestedArray<T>)[];

function flattern<T>(arr: NestedArray<T>): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattern(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattern([1, [2, [3, [4]]]]));
