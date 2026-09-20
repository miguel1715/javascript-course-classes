const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};


function checkoutDevice(ledger, assetTag, borrower) {
  const device = ledger[assetTag];

  if (!device) {
    return {
      ledger,
      message: `Device ${assetTag} was not found in the ledger.`
    };
  }

  if (device.status === "CheckedOut") {
    return {
      ledger,
      message: `Device ${assetTag} is already checked out.`
    };
  }
} 
