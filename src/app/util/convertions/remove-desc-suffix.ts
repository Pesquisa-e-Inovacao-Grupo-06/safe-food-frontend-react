export function removeDescSuffix(value: string): string {
  const uppercaseValue = value.toUpperCase();
  if (uppercaseValue.endsWith('_DESC')) {
    return uppercaseValue.slice(0, -5);
  }
  return value;
}
