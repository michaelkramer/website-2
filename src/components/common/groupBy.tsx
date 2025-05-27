export function groupBy<T, K extends keyof T>(
  arr: T[],
  key: K,
): Record<string, T[]> {
  return arr.reduce(
    (grouped, item) => {
      const groupValue = item[key];
      const groupKey = String(groupValue); // Ensure the key is a string
      grouped[groupKey] = grouped[groupKey] || [];
      grouped[groupKey].push(item);
      return grouped;
    },
    {} as Record<string, T[]>,
  );
}
