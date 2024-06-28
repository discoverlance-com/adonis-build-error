/**
 * Perform natural sorting with "Array.sort()" method
 */
export function naturalSort(current: string, next: string) {
  return current.localeCompare(next, undefined, { numeric: true, sensitivity: 'base' })
}
