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
  
}

function validateManifest(manifest) {
  const errors = {};

  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (typeof manifest.unit !== "string" || manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  return errors
}