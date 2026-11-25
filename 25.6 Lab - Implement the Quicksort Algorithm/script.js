function quicksort(array) {
    if (array.length <= 1) return array;

    const pivot = array[0];
    const rest = array.slice(1);

    const smaller = rest.filter((elem) => elem < pivot);
    const bigger = rest.filter((elem) => elem >= pivot);

    return [...quicksort(smaller), pivot, ...quicksort(bigger)];
};