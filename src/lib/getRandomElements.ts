export default function getRandomElements(arr, n, exclude, indexOfInnerArr) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len); //randpm index

    if (arr[x][indexOfInnerArr] === exclude) {
      console.log(arr);
      console.log(arr[x][indexOfInnerArr]);
      console.log(exclude);

      n++;
      continue;
    }

    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
