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
  const seen = {};
  const repeated = []; 
  if (phraseLength >= words.length) {
    return [];
  }
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    console.log(phrase)
    if (seen[phrase] !== undefined) {
      repeated.push(seen[phrase]);
      repeated.push(i);
    } else {
      seen[phrase] = i;
    }
  }
  return repeated
}