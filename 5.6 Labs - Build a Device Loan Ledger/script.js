const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower) {  // Checks out a device to a borrower.
  if (!ledger[assetTag]) { // guard 1 checks if the assetTag is in the object
    return { ledger: ledger, message: `Device ${assetTag} not found in the ledger.`};
  }
  
  if (ledger[assetTag].status === "CheckedOut") { // guard 2 checks if device requested is already taken
    return { ledger: ledger, message: `Device ${assetTag} is already checked out.`};
  }
  
  const ledgerClone = structuredClone(ledger); // deep copy of original object
  // set the name and email on the borrower object.
  ledgerClone[assetTag].borrower.name = borrower.name;
  ledgerClone[assetTag].borrower.email = borrower.email;

  ledgerClone[assetTag].status = "CheckedOut"; // set the status to checkOut
  return { ledger: ledgerClone, message : `Equipment number ${assetTag} borrowed by ${borrower.name}`}
}

function checkinDevice(ledger, assetTag) { // Returns a device to the shelf: clears the borrower and due date, sets status back to "CheckedIn".
  if (!ledger[assetTag]) {
    return { ledger: ledger, message: `Device ${assetTag} not found in the ledger.`}
  }

  const ledgerClone = structuredClone(ledger); // deep copy of the original Object
 
  // clear the name and email
  ledgerClone[assetTag].borrower.name = "";
  ledgerClone[assetTag].borrower.email = "";
  // reset the dueDate
  ledgerClone[assetTag].dueDate = "";
  // update status to "CheckedIn"
  ledgerClone[assetTag].status = "CheckedIn";

  return { ledger: ledgerClone, message: `Device ${assetTag} returned successfully.`}
}

function dateToNumber(dataString) { // turns a date format string input into a 8 digit number with the format of yearMonthDay.
  // split into parts
  const toArray = dataString.split("/");

  // convert each to a number
  const month = Number(toArray[0]);
  const day = Number(toArray[1]);
  const year = Number(toArray[2]);

  // combine into one number
  const finalNumber = year * 10000 + month * 100 + day; // this is a way to turn a date or numbers into a date format with 8 digits. 

  return finalNumber;
}

function listOverdueDevices(ledger, today) { // Returns an array of the devices that are past their due date on the given day.
  // gets the values as an array.
  const objArray = Object.values(ledger); 
  // filters the status checkedOut and dueDate earlier than today
  const overdueFilter = objArray.filter((obj) => obj.status === "CheckedOut" && dateToNumber(obj.dueDate) < dateToNumber(today)); 
  // dueDate by ascending order
  const ascendingSort = overdueFilter.sort((a, b) => dateToNumber(a.dueDate) - dateToNumber(b.dueDate));

  return ascendingSort
}

function serializeLedger(ledger) { // Converts the ledger object into a JSON string, for saving or sending.
  return JSON.stringify(ledger);
}

function loadLedger(json) { // Rebuilds a ledger object from a JSON string.
  return JSON.parse(json);
}