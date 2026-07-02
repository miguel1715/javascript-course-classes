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
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let found = false;

    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku === shipment[i].sku) {
        found = true;
      }
    }

  if (item.qty <= 0) {
    actions.push({type: "discard", item: item});
  }  else if (found === true) {
    actions.push({type: "restock", item: item});
  } else if (found === false) {
    actions.push({type: "donate", item: item});
  }
}

  return actions
}