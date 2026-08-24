function spinalCase (str) {
    const camelFixed = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    const underscoreFixed = camelFixed.replace(/_/g, " ");
    const result = underscoreFixed.toLowerCase().split(" ").join("-");

    return result;
}