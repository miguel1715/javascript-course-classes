function permuteString(str, prefix = "", arr = []) {
    if (str.length === 0) {
        arr.push(prefix);
        return arr;
    };

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const beforeLetter = str.slice(0, i);
        const afterLetter = str.slice(i + 1);
        const joined = beforeLetter + afterLetter;
        
        permuteString(joined, prefix + letter, arr);
    };

    const finalArr = [...new Set(arr)];
    return finalArr;
}