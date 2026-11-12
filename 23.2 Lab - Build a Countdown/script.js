function countdown(n) {
    if (n < 1) {
        return []
    } else {
        const finalArr = countdown(n - 1);
        finalArr.unshift(n);
        return finalArr;
    }
} 
console.log(countdown(5));
