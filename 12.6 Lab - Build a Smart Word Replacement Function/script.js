function myReplace(str, wordOut, wordIn) {
    const upOrLow = wordOut[0] === wordOut[0].toUpperCase(); // if yes its Capitalizaed, if false its lowercased

    if (upOrLow) {
         const finalWordIn = wordIn[0].toUpperCase() + wordIn.slice(1);
         return str.replace(wordOut, finalWordIn);
    } else {
        return str.replace(wordOut, wordIn.toLowerCase());
    }
}