/* eslint-disable import/prefer-default-export */
function getListSimilarity<T>(list1: T[], list2: T[]): T[] {
  const items = list1
  return list2.filter((item) => items.includes(item))
}

export { getListSimilarity }
