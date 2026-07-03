const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 3, expires: "2026-01-01", zone: "general" },
  { sku: "C32", name: "Eggs", qty: 1, expires: "2026-06-01", zone: "pantry" }
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

function groupByZone(actions) {
  let zoneGroups = {};

  for (let i = 0; i < actions.length; i++) {
    if (!zoneGroups.hasOwnProperty(actions[i].item.zone)) {
      zoneGroups[actions[i].item.zone] = [];
    }
    zoneGroups[actions[i].item.zone].push(actions[i]);
  }

  return zoneGroups
}

function clonePantry(pantry) {
  let copy = [];

  for (let i = 0; i < pantry.length; i++) {
    copy.push({...pantry[i]});
  }
  return copy
}

const step1 = clonePantry(pantry);
const step2 = parseShipment(rawData);
const step3 = planRestock(step1, step2);
const step4 = groupByZone(step3);
console.log(step4)