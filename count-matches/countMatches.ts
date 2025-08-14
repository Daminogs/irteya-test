export function countMatches<T extends number | string>(
  arrayA: T[],
  arrayB: T[]
): Record<T, number> {
  const freqMap = new Map<T, number>();

  for (const item of arrayB) {
    freqMap.set(item, (freqMap.get(item) ?? 0) + 1);
  }

  const result: Record<T, number> = {} as Record<T, number>;
  const uniqueA = new Set(arrayA);

  for (const value of uniqueA) {
    result[value] = freqMap.get(value) ?? 0;
  }

  return result;
}

// пример
const A = [1, 2, 2, 3, 5, 5];
const B = [2, 2, 3, 5, 5, 5, 7, 1];

console.log(countMatches(A, B));
