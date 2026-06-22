const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

function parseShipment(rawData) {
  const result = [];
  const seen = {};

  for (let i = 0; i < rawData.length; i++) {
    const [sku, name, qty, expires, zone = "general"] = (rawData[i].split("|"));
    if (!seen.hasOwnProperty(sku)) { 
      seen[sku] = true;
      result.push({ sku, name, qty: parseInt(qty), expires, zone})
    }
  }

  return result;
}

function planRestock(pantry, shipment) {
   const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }
  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];
  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}