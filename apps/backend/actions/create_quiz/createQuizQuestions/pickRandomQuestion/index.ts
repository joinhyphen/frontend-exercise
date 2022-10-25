export const pickRandomArrayItem = <TArray extends Array<unknown>>(
  array: TArray
): TArray[number] => {
  const randomIndex = Math.floor(Math.random() * (array.length - 1))
  const randomItem = array[randomIndex]
  return randomItem
}
