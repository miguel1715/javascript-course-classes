function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        const holdVariable = rangeOfNumbers(startNum, endNum);
        holdVariable.push(startNum + 1);
        return holdVariable;
    }
};
console.log