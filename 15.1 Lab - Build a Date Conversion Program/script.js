const currentDate = new Date(); //Current date/time as an object

const currentDateFormat = `Current Date and Time: ${currentDate}`; //Current date/time as an object with a extra string.
console.log(currentDateFormat);

function formatDateMMDDYYYY(dateArg) { // formats the current date to (MM/DD/YYYY)
    return `Formatted Date (MM/DD/YYYY): ${dateArg.getMonth() + 1}/${dateArg.getDate()}/${dateArg.getFullYear()}`
}

function formatDateLong(dateArg) { // formats the current date to (Month Day, Year) where month is "long"
    const monthFormat = dateArg.toLocaleDateString("en-US", {month: "long"}); // returns a string
    return `Formatted Date (Month Day, Year): ${monthFormat} ${dateArg.getDate()}, ${dateArg.getFullYear()}`;
}