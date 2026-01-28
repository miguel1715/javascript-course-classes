function truncateString(arg1, arg2) {
    if (arg1.length > arg2) {
        return arg1.slice(0, arg2) + "...";
    } else {
        return arg1;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))