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
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

