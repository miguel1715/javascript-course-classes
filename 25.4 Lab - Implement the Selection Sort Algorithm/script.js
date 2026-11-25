function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[smallestIndex]) {
            smallestIndex = j;
        }
    }
    
    let storage = 0;

    storage = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = storage;

  }

  return array;

}