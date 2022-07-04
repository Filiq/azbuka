export default function getRandomElements(
  arr: any[],
  n: number,
  exclude: any,
  indexOfInnerArr: number
) {
  let len = arr.length;

  const result = new Array(n),
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    let x = Math.floor(Math.random() * len); //randpm index

    if (arr[x][indexOfInnerArr] === exclude) {
      n++;
      continue;
    }

    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
