function bubbleSort(array) {
    let storage = 0

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                storage = array[i];
                array[i] = array[i + 1] ;
                array[i + 1] = storage;    
            };
        };
    };
    return array;
}