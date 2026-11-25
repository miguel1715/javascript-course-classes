function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const card = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > card) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = card;
  }
  return array;
}