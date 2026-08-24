function translatePigLatin (str) {
    if (/^[aeiou]/.test(str)) {
        return str + "way";
    } else if (!/[aeiou]/.test(str)) {
        return str + "ay"
    } else {
        const vowelIndex = str.search(/[aeiou]/);
        const final = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
        return final
    }
}